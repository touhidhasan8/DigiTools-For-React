import React from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';

const SelectCard = ({ selectCard, setSelectCard }) => {

    const handleDelete = (cardDataitem) => {
        const filterCardData = selectCard.filter(
            cardItem => cardItem.id !== cardDataitem.id
        );

        setSelectCard(filterCardData);
        toast(`${cardDataitem.name} is Deleted`);
    };

    const handleProceedToCheckout = () => {
        setSelectCard([])
        
    }
    const totalPrice = selectCard.reduce((sum, item) => sum + (parseInt(item.price) || 0), 0);



    return (
        <div>
            {
                selectCard.map(item => {
                    const { name, price, image,period } = item;


                    return (
                        <div key={item.id} className='flex justify-between items-center w-full px-4 py-2 border-2 mt-2 mb-2'>
                            <div className='flex gap-5 items-center'>
                                <img className='w-10 h-10 object-cover' src={image} alt={name} />
                                <div>
                                    <h1 className='text-xl'>{name}</h1>
                                    <p>${price}/{period}</p>
                                </div>
                            </div>

                            <MdDelete
                                onClick={() => handleDelete(item)}
                                className='text-xl cursor-pointer text-red-500'
                            />
                        </div>
                    );
                })
            }

            <div>
                <div className='flex justify-between'>
                    <h1>Total </h1>
                    <p className='font-bold'>${totalPrice}</p>
                </div>
                <div className='w-full text-center'>
                    <button onClick={handleProceedToCheckout} className='btn btn-primary w-full'>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default SelectCard;