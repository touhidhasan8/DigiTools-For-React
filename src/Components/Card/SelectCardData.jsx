import React from 'react';
import SelectCard from './SelectCard';
import Empty from './Empty';

const SelectCardData = ({selectCard,setSelectCard }) => {
   
    
    return (
        <div className=' '>
            {
                selectCard.length=== 0 ? <Empty></Empty> :<SelectCard selectCard={selectCard} setSelectCard={setSelectCard}></SelectCard>
            }
        </div>
    );
};

export default SelectCardData;


