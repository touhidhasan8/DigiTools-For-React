import React, { use, useState } from 'react';
import CardData from './CardData';
import SelectCardData from './SelectCardData';

const Card = ({ loadData, selectCard,setSelectCard }) => {
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


                <button onClick={() => setProductType('cart')} className={`${productType === "cart" ? "btn btn-primary rounded-full" : "btn  rounded-full"}`}>Cart ({selectCard.length})</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    productType==='product'? data.map((product=><CardData selectCard={selectCard} setSelectCard={setSelectCard} key={product.id} product={product}></CardData>)):<SelectCardData selectCard={selectCard} setSelectCard={setSelectCard}></SelectCardData>
                }
            </div>
        </div>
    );
};

export default Card;