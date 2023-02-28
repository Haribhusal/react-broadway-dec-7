import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios, { all } from 'axios';
const UserDetailsPage = () => {
    const router = useParams();
    const userId = router.contactId;

    // const [users, setUsers] = useState([])
    const [singleUserData, setSingleUserData] = useState([]);
    console.log(singleUserData);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {

                let allUsers = res.data;
                let singleUserDataFetched = allUsers.filter((item) => item.id === parseInt(userId));
                // setUsers(res.data);
                // console.log(singleUserDataFetched
                setSingleUserData(singleUserDataFetched[0]);
            })
    }, [userId])



    return (

        <>
            <h1 className='text-5xl '>{singleUserData.name} ({singleUserData.username})</h1>
            <h1 className='text-2xl '>{singleUserData.email}</h1>
            <h1 className='text-xl '>{singleUserData.phone}</h1>
            <h1 className='text-xl '>{singleUserData.website}</h1>
        </>
    )
}

export default UserDetailsPage