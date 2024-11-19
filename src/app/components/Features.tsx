    import Image from "next/image"
    import Link from "next/link"

    export default function Features(){
        return(
        <div><h1 className="bg-gray-100">Featured New Cars</h1>
        <div>
            <ul className="flex col-span-3 space-x-4 bg-gray-100">
                <li>Popular</li>
                <li>upcoming</li>
                <li>Newly Launched</li>
            </ul>
        </div>
        <div>
            <div className="grid grid-cols-4 bg-gray-100 gap-10 py-2 w-auto h-full">
        <div className="flex flex-col items-center justify-center mb-10 mt-10 bg-white">
        <Link href="/Corolla"><Image 
            src="/corollahybrids.jpg" 
            alt="Toyota Corolla" 
            className="rounded-lg" 
            height={250} 
            width={270} 
            /></Link>
            <h1 className="font-semibold text-blue-600 mt-2 text-center">Toyota Corolla</h1>
            <h2 className="text-green-600 text-center">PKR 59.7-75.5 lacs</h2>
        </div>

        <div className="flex flex-col items-center justify-center mb-10 mt-10 bg-white">
           <Link href="/Alto"> <Image 
            src="/suzukialto.png" 
            alt="Suzuki Alto"  
            className="rounded-lg" 
            height={250} 
            width={270} 
            /></Link>
            <h1 className="font-semibold text-blue-600 mt-4 text-center">Suzuki Alto</h1>
            <h2 className="text-green-600 text-center">PKR 23.30-30.5 lacs</h2>
        </div>
        <div className="flex flex-col items-center justify-center mb-10 mt-10 bg-white">
        <Link href="/City"><Image 
            src="/hondacity.jpg" 
            alt="Honda City"  
            className="rounded-lg" 
            height={250} 
            width={270} 
            /></Link>
            <h1 className="font-semibold text-blue-600 mt-4 text-center">Honda City</h1>
            <h2 className="text-green-600 text-center">PKR 46.50-58.85 lacs</h2>
        </div>
        <div className="flex flex-col items-center justify-center mb-10 mt-10 bg-white">
        <Link href="./Civic"><Image 
            src="/hondacivic.jpg" 
            alt="Honda Civic"  
            className="rounded-lg" 
            height={250} 
            width={270} 
            /></Link>
            <h1 className="font-semibold text-blue-600 mt-4 text-center">Honda Civic</h1>
            <h2 className="text-green-600 text-center">PKR 86.60-99.00 lacs</h2>
        </div>    
        </div>

            
            <div className="row-span-10 bg-blue-700"></div>
            <div className="row-span-10 bg-gray-700"></div>
            

        </div>
        </div>

        )
    }