import React, { useState } from 'react';


const CardData = ({ product, selectCard, setSelectCard }) => {
    const { name, description, price, tag, feature1, feature2, feature3, image } = product;
    const [isSelect, setSelect] = useState(false)
    const handleSelect = () => {
        setSelect(true)
        setSelectCard([...selectCard, product])
    }

    return (
        <div className="card  bg-base-100 shadow-sm">
            <div className="card-body">
                <div className='flex justify-end'>
                    <h1 className='badge badge-warning'> {tag}</h1>
                </div>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">{name}</h2>

                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">

                    <li> {description} </li>
                    <span className="text-xl">{price}</span>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{feature1}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{feature2}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{feature3}</span>
                    </li>


                </ul>
                <div className="mt-6">
                    <button
                        onClick={handleSelect}
                        className={`btn btn-block ${isSelect ? "btn-success" : "btn-primary"}`}
                    >
                        {isSelect ? "✔ Added To Card " : "Buy Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardData;

