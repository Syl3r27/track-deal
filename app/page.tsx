import { Button } from "@/components/ui/button";
import { Bell, LogIn, Rabbit, Shield } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const user = null;
  const products = [];
  
  const FEATURES = [
    {
      icon: Rabbit,
      title: "LightningFast",
      description : "Track deal provides the best deals in seconds"
    },
    {
      icon : Shield,
      title : "Reliable",
      description : "Supports all the platforms"
    },
    {
      icon : Bell,
      title : "Smart Alerts",
      description : "Notifies you instantly for wishlisht products"
    }
  ]
   

  return <main className="min-h-screen">
    <header className=" backdrop-blur-sm border-b  sticky top-0 ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="TrackDeal logo"
            width={400}
            height={75}
            className="h-15 w-auto"
          />
        </div>
      {/* Auth Button */}
      <Button 
        variant = "default"
        size="sm"
        className="bg-[#A594F9] hover:bg-[#9381F7] gap-2"
      >
        <LogIn className="w-4 h-4"/>
        Sign In
      </Button>
      </div>
    </header>
    <section className="py-20 px-4">
      <div className=" max-w-7xl mx-auto text-center">
        <div className="inline-flex bg-violet-200 text-violet-800 px-6 py-2 text-sm rounded-full font-semibold mb-6 ">Made With Love By SYL3R 🥀❤️</div>

        <h2 className="tracking-tight text-5xl font-bold text-gray-700 mb-6 ">Catch deals at the right moment</h2>

        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Stop checking prices every day. Track once, get alerts, and save money effortlessly.
        </p>

        {/* Add Product Form */}
        {/* Features */}
        {products.length === 0 && (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {FEATURES.map(({icon: icons,title, description})=>(
              <div
                key={title}
                className="bg-white p-6 rounded-xl border border-gray-200"  
              >

              </div>
            ))}
          </div>
        ) }
      </div>
    </section>


  </main>
}
