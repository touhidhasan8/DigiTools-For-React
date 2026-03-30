import React from 'react';
import { MdDelete } from 'react-icons/md';

const SelectCard = ({ item }) => {
    console.log(item);
    const { name, price, image } = item
    return (
        <div className='flex justify-between items-center w-full container mx-auto'>
            <div className='flex gap-5'>
                <img src={image} alt={name} />
                <div >
                    <h1 className='text-xl'>{name}</h1>
                    <p>{price}</p>
                </div>
            </div>
            <div>
                <MdDelete />
            </div>

        </div>
    );
};

export default SelectCard;