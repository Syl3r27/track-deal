import FirecrawlApp from "@mendable/firecrawl-js";

const firecrawl = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

export async function scrapeProduct(url) {
  if (!url) throw new Error("URL is required");

  // 1. Define schema (Relaxed to allow string parsing)
  const schema = {
    type: "object",
    properties: {
      productName: { type: "string" },
      currentPrice: { type: ["number", "string"] }, // Accept string temporarily (e.g. "19.99 USD")
      currencyCode: { type: "string" },
      productImageUrl: { type: "string" },
    },
  };

  try {
    const result = await firecrawl.scrape(url, {
      formats: [
        {
          type: "json",
          schema: schema,
          prompt: "Extract the product name, price, currency, and image. IMPORTANT: The price is usually a number near the product title. If you see multiple prices, choose the current selling price.",
        },
      ],
      // 2. CRITICAL: Add actions to force Zara to load the price
      actions: [
        { type: "wait", milliseconds: 2000 }, // Wait for initial load
        { type: "scroll", direction: "down", amount: 500 }, // Scroll to trigger lazy loading
        { type: "wait", milliseconds: 1000 } // Wait for elements to settle
      ],
    });

    // 3. Handle Empty Results
    if (!result || !result.json) {
      throw new Error("Scrape failed: No data returned from Firecrawl.");
    }

    const data = result.json;

    // 4. CLEANUP & VALIDATION (Prevents DB Errors)
    
    // Convert price string to number if needed (e.g. "$12.99" -> 12.99)
    if (typeof data.currentPrice === 'string') {
      // Remove non-numeric characters except dot
      const cleanPrice = data.currentPrice.replace(/[^0-9.]/g, '');
      data.currentPrice = parseFloat(cleanPrice);
    }

    // Final Check: If price is still missing or NaN, throw a readable error
    if (data.currentPrice === null || data.currentPrice === undefined || isNaN(data.currentPrice)) {
       console.error("Failed Extraction Dump:", data); // Log what WAS found
       throw new Error("Could not detect a valid price on this page. The layout might be preventing extraction.");
    }

    // Ensure defaults for other fields to prevent DB errors
    return {
      productName: data.productName || "Unknown Product",
      currentPrice: data.currentPrice, // Guaranteed to be a number now
      currencyCode: data.currencyCode || "USD",
      productImageUrl: data.productImageUrl || "",
    };

  } catch (error) {
    console.error("Firecrawl scrape error details:", error);
    throw new Error(error.message);
  }
}