import React from 'react'
import './Products.css'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function ProductList({product}) {
    const ratingStar=Array.from({length:5},(elem,index)=>{
        let number=index +0.5;
        return (
            <span key={index}>
                {
                    product.rating>= index +1 ?(
                        <FaStar className='icon'/>
                    ): product.rating >=number?(
                        <FaStarHalfAlt  className='icon'/>
                    ):(
                        <AiOutlineStar className='icon'/>
                    )
                }
            </span>
        )
 
    })

    const discountprices=Math.ceil((product.price * product.discountPercentage)/100);
    const price=product.price - discountprices;
  return (
    <div class="card">
         
    {/* <h2 style={{color:'red'}}>{product.discountPercentage}%</h2> */}
    <div className='container'>
    <img style={{height:'160px', width:'240px'}} src={product.images[0]} alt=""/>
    <div className="top-left">{product.discountPercentage}%</div>
    </div>
   
    <p style={{float:'left',textAlign:'left'}}>{product.description}</p>

    <label> <FaStar size={product.rating}/> </label>
    
        <div className='icon-style' style={{color:'orange'}}>
           <span style={{float:'left'}}>{ratingStar}</span>  <span style={{color:'black',marginLeft:'5px'}}>({product.stock})  </span>
            <span style={{float:'right', color:'blue',fontSize:'12px'}}>Stock Available</span>
        </div>
   
    
    <p ><span style={{color:'cyan',fontWeight:'bold', float:'left'}}>${price}.00 </span><span style={{color:'grey',textDecoration:'line-through', marginLeft:'15px'}}>${discountprices}.00</span> </p>
</div>
  )
}

export default ProductList