import React from 'react';
import SelectCard from './SelectCard';
import Empty from './Empty';

const SelectCardData = ({selectCard }) => {
    console.log(selectCard);
    
    return (
        <div className=' '>
            {
                selectCard.length=== 0 ? <Empty></Empty> :selectCard.map(item=><SelectCard key={item.id} item={item}></SelectCard>)
            }
        </div>
    );
};

export default SelectCardData;