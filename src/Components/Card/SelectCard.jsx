import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectCard = ({ item }) => {
    console.log(item);
    const { name, price, image } = item
    return (
        <div>
            <div className='flex justify-between items-center w-full px-4 py-2 border-2 mt-2 mb-2'>
                <div className='flex gap-5 items-center'>
                    <img className='w-10 h-10 object-cover' src={image} alt={name} />
                    <div>
                        <h1 className='text-xl'>{name}</h1>
                        <p>{price}</p>
                    </div>
                </div>
                <MdDelete className='text-xl cursor-pointer text-red-500' />
            </div>
           
        </div>
    );
};

export default SelectCard;