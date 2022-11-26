import React from 'react';
import { MdDeleteForever } from 'react-icons/md'
import './diary.css';

const Diary = ({ id , desc, createdAt, name, price }) =>{
   
    return(
        <div className='diary'> 
           <h5>Product name: {name}</h5>
           <br/>
          <span>{desc}</span>
          <p>Price: ${price}</p>
          <div className='diary-footer'>
              <span>Date created: <small>{createdAt}</small></span>
              <MdDeleteForever />
          </div>
        </div>
    )
}

 

export default Diary;