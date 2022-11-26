import React, { useState, useEffect } from 'react';
import Diary from './Diary.component';
import { firestore } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
    getDocs,
    collection,
    query,
    orderBy
  } from 'firebase/firestore';
import Header from '../header/Header';
import AddDiary from '../add-diary/AddDiary.component';
import './DiaryList.css';

const DiaryList = ({ currentUser }) =>{
    const [diarys, setDiary] = useState([])

useEffect(() => {
    const getAllUserDiary = async () => {
    const Diaryitems = await getDocs(
        query(collection(firestore, 'Diary'), orderBy('createdAt', 'desc'))
    );
    setDiary(Diaryitems.docs.map(doc => doc.data()));
}
getAllUserDiary();
}, []);


    return(
        <div>
         <Header/>
         <div className='diarylist-container'>
         <div id='diary-user'>{currentUser && <p style={{color: '#000', fontSize: '20px'}}>{currentUser.displayName} DIARY PAGE</p> }</div>
            <div className='diary-list'>
            {
                diarys.map((diary) => (
                <Diary 
                    id={diary.id} name={diary.name}
                    price={diary.price} desc={diary.desc} 
                    date={diary.createdAt} 

                    />
                ))
            }
            <AddDiary />
            </div>
         </div>
        </div>
    )
}

const mapInitialStateToProps = state => ({
    currentUser: selectCurrentUser(state)
})

export default connect(mapInitialStateToProps)(DiaryList);