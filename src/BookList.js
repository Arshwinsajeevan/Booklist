import React, { useState, useEffect } from 'react'
import './BookList.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BookList() {
    const [search, setSearch] = useState("");
    const [bookdata, setData] = useState([]);
    useEffect(() => {
        axios.get('https://api.itbook.store/1.0/new').then(res => {
            console.log(res);
            setData(res.data.books)
        })
    })

    return (
        <>
            <div className='container'>
                <h3>BookList</h3>
            </div>
            <input className='input' type="text" placeholder='Search for book and enter' value={search} onChange={e => setSearch(e.value)}/>
            <Link to='/Fav'><button className='button' type="button">Favorite</button></Link>

            <div className='main'>
                <h3 className='text_1'>There are two motives for reading a book : one, that you enjoy it; the other, that you canboast about it.</h3>
            </div>
            <div>
            </div>

            {
                bookdata.filter((item) => {
                    return search.toLocaleLowerCase() === '' ? item : item.title.toLowerCase().includes(search)
                }).map((item) => (

                   <div className='card'>
                        <div >{item.id}<div />
                            <div><img src={item.image}></img></div>
                            <div><h4>{item.title}</h4></div>
                            <div><p>{item.price}</p></div>
                           <Link to='/Fav'> <div> <Button variant="info">Add to Favorites</Button>{' '}</div></Link>
                        </div>
                   </div>
                ))
            }


        </>
    )
}

export default BookList
