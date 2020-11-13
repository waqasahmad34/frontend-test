import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <>
            <h1>Welcome To Frontend Coding Exercise</h1>
            <Link to="/list-tasks">Go To Tasks</Link>
        </>
    )
}

export default Home;
