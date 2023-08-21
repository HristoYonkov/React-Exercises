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
    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = '';
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i];
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        console.log('This was Computed!');
        return longestName;
    } 

    return (
        <>
            <h1>UseMemo</h1>
        </>
    )
}

export default UseMemo