import React, { use, useState } from 'react';
import CardData from './CardData';

const Card = ({ loadData }) => {
    const data = use(loadData)
    // console.log(data);

    const [productType, setProductType] = useState('product')

    return (
        <div className='space-y-5'>
            <div className='space-y-5 text-center '>
                <h1 className='text-5xl font-semibold'>Premium Digital Tools</h1>
                <p className='text-xl text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>


            <div className='flex justify-center'>
                <button onClick={() => setProductType('product')} className={`${productType === "product" ? "btn btn-primary rounded-full" : "btn rounded-full"}`}>Product</button>


                <button onClick={() => setProductType('cart')} className={`${productType === "cart" ? "btn btn-primary rounded-full" : "btn  rounded-full"}`}>Cart</button>
            </div>

            <div>
                {
                    productType==='product'? data.map((product=><CardData key={product.id} product={product}></CardData>)):""
                }
            </div>
        </div>
    );
};

export default Card;