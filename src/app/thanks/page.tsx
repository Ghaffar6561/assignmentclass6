import Image from "next/image"
export default function Thanks(){
    return(
<div className="w-full h-screen flex items-center justify-center bg-blue-50">  
            <div className="text-center">  
                <h1 className="text-6xl text-blue-700 font-extrabold font-serif">Thank you for Shopping !!!</h1>  
                <p className="text-2xl p-4 mt-4 font-thin text-gray-800 ">Your order will be delivered in 3 Business days ☺ </p>  
                
                <p className="text-2xl p-3 mt-6 font-bold text-blue-500">Let’s connect on</p>    
            <div className="flex  items-center justify-center">
             <a target="_blank" href="https://www.linkedin.com/in/ghaffar-accounts/"><Image
             src="/linkedin.png" alt="Linkedin Logo" height={48} width={48}/></a>
             <a target="_blank" href="https://vercel.com/ghaffar-ahmed"><Image
             src="/Vercel.png" alt="Versal Logo" height={48} width={48}/></a>
             
            </div> </div> 
        </div>  
    );  
    
}