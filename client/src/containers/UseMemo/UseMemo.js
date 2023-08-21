import React, { useEffect, useState } from 'react'

const UseMemo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            
        }, []);
        
        console.log(data);
    return (
        <>
            <h1>UseMemo</h1>
        </>
    )
}

export default UseMemo