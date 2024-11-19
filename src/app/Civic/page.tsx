import Link from "next/link"


export default function Civic(){
    return(
        
        <div className="bg-blue-100">
            <h1 className="flex align-middle justify-center text-4xl"><b><u>Honda Civic 2024 Price in Pakistan,Image, Reviews & Specs</u></b></h1>
            <br />

            <div className=" flex justify-center align-middle w-15">
            <img  src="hondacity.jpg" alt="Honda City Image" className="w-1/4 mb-10 mt-10" /></div>
            
            <div>
                <div className="flex gap-4  justify-center">
                   <Link href="#!"> <button className="px-4 py-3 align-middle justify-center text-white bg-blue-700 rounded-md ">Book a Test Drive</button></Link>
                   <Link href="#!"><button className="px-4 py-3 align-middle justify-center text-blue-800 bg-white border border-blue-800 rounded-md ">Request Bank Finance</button></Link>
                   <Link href="#!"><button className="px-4 py-3 align-middle justify-center text-blue-800 bg-white border border-blue-800 rounded-md ">Visit Place</button></Link>
                   <Link href="#!"><button className="px-4 py-3 align-middle justify-center text-blue-800 bg-white border border-blue-800 rounded-md ">Car Inspection</button></Link>
                
                    
                </div>
                
                <h1 className= "flex justify-center align-middle font-semibold text-2xl">Vehicle Discription</h1>
                <ul className="flex justify-center px-2 space-x-2 ">
                    <li><span className="font-semibold">Number of Doors</span> 4  </li>
                    <li><span className="font-semibold">Engine</span> 1800CC</li>
                    <li><span className="font-semibold">Condition</span> 8.5 / 10</li>
                    <li><span className="font-semibold">Driven</span> 95,000 KM</li>
                    <li><span className="font-semibold">Suspension Type</span> Soft Suspension</li>
                    <li><span className="font-semibold">Avg</span> 13 Km per ltr</li>
                    <li><span className="font-semibold">Tranmission</span> Automatic</li>
                    <li><span className="font-semibold">Fuel Type</span> High Octane</li>
                </ul>
                <h1 className=" flex mt-3 mb-5 justify-center font-semibold text-green-600">PKR 89,50,000</h1>
             </div>
             
             
             <div className="flex justify-center">
                <button className="flex justify-center border mb-3 px-2 py-2 border-blue-800 align-middle rounded-md bg-blue-900 text-white"><a href="./Forms">Make Payment</a></button>
                
                </div>
            </div>
        
    )
}
