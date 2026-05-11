import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Map, ShieldCheck, CreditCard, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 selection:bg-red-200">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pb-16 pt-20 lg:pb-32 lg:pt-28 border-b border-gray-100">
          <div className="absolute inset-0 z-0">
            <div className="absolute right-0 top-0 hidden h-full w-[60%] lg:block bg-red-50 rounded-bl-[150px] overflow-hidden">
               <Image 
                 src="/hero-bg.png" 
                 alt="Hero background" 
                 fill 
                 className="object-cover object-center opacity-90 transition-transform duration-[15s] hover:scale-105"
                 priority
               />
            </div>
          </div>
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-6xl xl:text-7xl mb-6">
                Go anywhere with <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">RideShare</span>
              </h1>
              <p className="mt-4 text-lg text-gray-600 sm:text-xl max-w-xl mb-10 leading-relaxed font-medium">
                Request a ride, hop in, and go. Connecting university students through safe, verified, and affordable carpooling.
              </p>
              
              {/* Ride Request Widget */}
              <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-6 border border-gray-100 mt-8 max-w-md transform transition hover:-translate-y-1 duration-300">
                <div className="flex bg-gray-100 rounded-xl p-1 mb-6 max-w-fit">
                  <button className="bg-white px-6 py-2 rounded-lg font-bold text-sm shadow-sm text-gray-900">Ride</button>
                  <button className="px-6 py-2 rounded-lg font-semibold text-sm text-gray-500 hover:text-gray-900 transition">Drive</button>
                </div>
                
                <div className="space-y-4 relative">
                  <div className="absolute left-[20px] top-[24px] bottom-[28px] w-[2px] bg-gray-200 z-0"></div>
                  
                  <div className="relative z-10 flex items-center">
                    <div className="bg-gray-100 p-2 rounded-full mr-4 border-[3px] border-white shadow-sm shrink-0">
                      <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Pickup location" 
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-red-500 focus:bg-white transition text-gray-900 placeholder:text-gray-400 font-medium"
                    />
                  </div>
                  
                  <div className="relative z-10 flex items-center">
                    <div className="bg-red-100 p-2 rounded-full mr-4 border-[3px] border-white shadow-sm shrink-0">
                      <MapPin size={10} className="text-red-600" fill="currentColor" />
                    </div>
                    <input 
                      type="text" 
                      placeholder="Dropoff destination" 
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-red-500 focus:bg-white transition text-gray-900 placeholder:text-gray-400 font-medium"
                    />
                  </div>
                </div>

                <Link href="/rides/search" className="mt-6 w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold transition text-lg shadow-lg shadow-gray-200">
                  <Search size={20} /> See prices
                </Link>
              </div>
            </div>
            
            {/* Mobile Hero Image */}
            <div className="mt-12 lg:hidden w-full h-64 relative rounded-2xl overflow-hidden shadow-lg border border-gray-100">
               <Image 
                 src="/hero-bg.png" 
                 alt="Hero background" 
                 fill 
                 className="object-cover"
               />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl font-black text-gray-900 sm:text-4xl mb-4">Why choose RideShare?</h2>
               <p className="text-lg text-gray-600 font-medium">We've built the most reliable platform for university students to travel safely and affordably.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                    <ShieldCheck size={32} className="text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Safety</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">All users are verified with university emails. Share rides exclusively within your trusted campus community.</p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                    <CreditCard size={32} className="text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Affordable Fares</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">Split the cost of gas and tolls. Save money compared to traditional ride-hailing services on every single trip.</p>
                </div>
                
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300 transform hover:-translate-y-2 group">
                  <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                    <Clock size={32} className="text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Flexible Scheduling</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">Find rides that match your class schedule perfectly. Post or request a ride minutes or days in advance.</p>
                </div>
             </div>
          </div>
        </section>

        {/* CTA Section for Drivers */}
        <section className="bg-red-600 py-24 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 opacity-10">
             <Map size={400} />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-10 md:mb-0">
               <h2 className="text-4xl font-black text-white mb-4 leading-tight">Drive when you want, <br/>make what you need.</h2>
               <p className="text-red-100 text-lg max-w-xl font-medium">
                 Earn money splitting costs on routes you already take. No strict schedules, no commitments. Just you, your car, and your terms.
               </p>
            </div>
            <div className="md:w-1/3 flex justify-end">
               <Link href="/auth/register" className="bg-white text-red-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transition transform hover:scale-105 border border-white">
                 Get started
               </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
