import Image from "next/image";

import Featured from "./Featured/page";
import Features from "./components/Features";




export default function Home() {
  return (
    
    <div >
      <div>
            
            <h2 className="text-2xl text-center mt-12 mb-8">Sell Your Car on PakWheels and Get the Best Price</h2>
            <div className="grid grid-cols-2 w-auto m-10 gap-0 h-full bg-white">
                <div className="flex flex-col border border-gray-200 items-center justify-center mb-10 mt-10 bg-white">
                    <h1 className="text-blue-800 font-bold text-lg">Post your Ad on PakWheels</h1>
                <h2><ol className="list-disc pl-5">
                    <li>Post your Ad for Free in 3 Easy Steps</li>
                        <li> Get Genuine offers from Verified Buyers</li>
                        <li> Sell your car Fast at the Best Price</li>
                       <div className=" flex items-center justify-start"> 
                    <button className="flex justify-start bg-red-500 rounded-md py-1.5 px-6 text-white font-bold">Post Your Ad</button>
                            
                       </div>
                    </ol></h2>
                    </div>
                   
                    <div className="flex flex-col border border-gray-200 items-center justify-center mb-10 mt-10 bg-white">
                    <h1 className="text-blue-800 font-bold text-lg">Try PakWheels Sell It For Me</h1>
                <h2><ol className="list-disc pl-5">
                    <li>Dedicated Sales Expert to Sell your Car</li>
                        <li> We Bargain for you and share the Best Offer</li>
                        <li> We ensure Safe & Secure Transaction</li>
                        
                       <div className=" flex items-center justify-start"> 
                        <button className="flex bg-blue-500 rounded-md py-1.5 px-6 text-white font-bold">Register Your Car</button>
                        

                       </div>
                    </ol></h2>
                    </div>

                
            </div>
        </div>

    <Features/> 

    
    </div>

  );
}
import Link from "next/link"




