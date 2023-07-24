import React from 'react';
import Form from "../components/Form";

const Modal = ({isVisible,onClose}: { [x: string]: any; isVsisble: any; onClose: any;}) => {
    if( !isVisible) return null;
const handleClose = (e : any)=>{
    if(e.target.id === 'wrapper') onClose()
}

  return (

 <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id = "wrapper" onClick={handleClose}>
    <div className='w-[600px] flex flex-col bg-white h-auto  rounded-lg'>
        
        {/* <button className='text-black text-xl place-self-end ' onClick={()=>onClose()}>Close X</button> */}
        {/* <div className='bg-white p-2 rounded'> */}
      <div className='py-6 px-6 lg:px-8 text-center'>
        <h1 className='text-4xl mt-4 mb-2 font-bold text-gray-900'>Get a Quote</h1>
        <Form />
        <h6 className = 'text-center text-black hover:text-red-500 underline mt-2 cursor-pointer mb-2'onClick={()=>onClose()}>Close</h6>
          
      </div>
   </div>
</div>
    //  </div>
    


    )
}

export default Modal;