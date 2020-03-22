import React from 'react';
import style from './Users.module.css';


const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers( [
            {id:1, photourl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXLwygNAUV7PaBvtksqAV-qFwXIoURbXXVAvjZddN3ZIbTM_Xt', followed:false, fullName: 'Vasya', status: 'lox', location: {city: 'Energodar', country: 'Ukraine'} },
            {id:2, photourl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXLwygNAUV7PaBvtksqAV-qFwXIoURbXXVAvjZddN3ZIbTM_Xt', followed:true, fullName: 'Kolya', status: 'gey', location: {city: 'Dnepr', country: 'Ukraine'} },
            {id:3, photourl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXLwygNAUV7PaBvtksqAV-qFwXIoURbXXVAvjZddN3ZIbTM_Xt', followed:false, fullName: 'Ilyuha', status: 'pitushara', location: {city: 'Moscow', country: 'Russia'} },
            {id:4, photourl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXLwygNAUV7PaBvtksqAV-qFwXIoURbXXVAvjZddN3ZIbTM_Xt', followed:true, fullName: 'Galya', status: 'conch', location: {city: 'Vienna', country: 'Austria'} },
            {id:5, photourl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXLwygNAUV7PaBvtksqAV-qFwXIoURbXXVAvjZddN3ZIbTM_Xt', followed:false, fullName: 'Podliva', status: 'sick', location: {city: 'Kyiv', country: 'Ukraine'} },
              ]);
    } 

    return <div>
        {
         props.users.map( u => <div key={u.id}>
            <span>
                <div>
                    <img alt ='#' src={u.photourl} className={style.photo} />
                </div>
                <div>
                    {u.followed   ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                                    : 
                                    <button onClick={ () => {props.follow(u.id)} } >Follow</button>}
                </div>
            </span>
            <span>
                <div>{u.fullName}</div>
                <div> {u.status} </div>
            </span>
            <span>
                <div> {u.location.city} </div>
                <div>{u.location.country} </div>
            </span>
        </div>) }
        </div>
    
};

export default Users;