import React from 'react';
import SelectCard from './SelectCard';

const SelectCardData = ({selectCard }) => {
    console.log(selectCard);
    
    return (
        <div className=' border-2'>
            {
                selectCard.map(item=><SelectCard key={item.id} item={item}></SelectCard>)
            }
        </div>
    );
};

export default SelectCardData;