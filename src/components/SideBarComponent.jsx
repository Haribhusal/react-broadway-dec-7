import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const SideBarComponent = () => {

    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data);
            })
    }, [])

    return (
        <div>
            <h3 className="title text-xl font-bold  text-slate-700 mb-2">Most Popular Users</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.name}>
                        <Link to={`/contacts/${user.id}`}> {user.name}</Link>
                        {/* <a href="/">{user.name}</a> */}
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SideBarComponent