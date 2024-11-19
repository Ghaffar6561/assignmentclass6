export default function Form(){
    return(
        <div className="bg-blue-50">
            <h1 className="text-4xl font-semibold text-center uppercase">
                enter your details
            </h1>

            <div>
            <form className="mt-10 flex gap-2 justify-center rounded-xl items-center flex-col border">
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
               <br/>
                <input type="name" className="w-96 p-2 mb-3 rounded-md py-3 border"
                 placeholder="Enter your Name" />

<input type="email" className="w-96 p-2 mb-3 rounded-md py-3 border"
                 placeholder="Enter your Email" />
                 <input type="cardnumber" className="w-96 p-2 mb-3 rounded-md py-3 border"
                 placeholder="Card Number" />
                                  <input type="address" className="w-96 p-2 mb-3 rounded-md py-3 border"
                 placeholder="Address" />

                <button className=" py-3 px-7 mt-5 mb-20 rounded-lg 
                 bg-blue-700 text-white"><a href="./thanks">Place your order</a></button>
                 
                 
            </form>
            </div>
        
        </div>
    )
}