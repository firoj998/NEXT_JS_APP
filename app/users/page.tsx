import React from 'react'
interface User {
    id: number;
    name: string;
}
const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',{
        cache:'no-store'
    });   //caching come automatically with Fetch in NEXT.JS
    // const res = await fetch(
    //     'https://jsonplaceholder.typicode.com/users',
    //     {cache:'no-cache'});                           // Disabling the caching

    // const res = await fetch(
    //     'https://jsonplaceholder.typicode.com/users',
    //     { next: { revalidate: 10 } });                    // Next.JS gonna run a Backdround job to get fresh data from backend every 10 sec
    const users: User[] = await res.json();
    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UsersPage