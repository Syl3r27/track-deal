import AddProductForm from "@/components/AddProductForm";
import AuthButton from "../components/AuthButton"
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { Bell, Icon, LogIn, Rabbit, Shield } from "lucide-react";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();

  const{
    data:{user},
  } = await supabase.auth.getUser();

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
      <AuthButton user={user}/>
      </div>
    </header>
    <section className="py-20 px-4">
      <div className=" max-w-7xl mx-auto text-center">
        <div className="inline-flex bg-violet-200 text-violet-800 px-6 py-2 text-sm rounded-full font-semibold mb-6 ">Made With Love By SYL3R 🥀❤️</div>

        <h2 className="tracking-tight text-5xl font-bold text-gray-700 mb-6 ">Catch deals at the right moment</h2>

        <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Stop checking prices every day. Track once, get alerts, and save money effortlessly.
        </p>

        <AddProductForm/>
        {/* Features */}
        {products.length === 0 && (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {FEATURES.map(({icon: Icon,title, description})=>(
              <div
                key={title}
                className="bg-white p-6 rounded-xl border border-gray-200"  
              >
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-violet-800"/>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        ) }
      </div>
    </section>


  </main>
}
