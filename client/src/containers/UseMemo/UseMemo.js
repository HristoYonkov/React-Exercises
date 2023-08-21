import React, { useEffect, useMemo, useState } from 'react'
// Used for complex computations when certain function needs more time!
// And for example useMemo hook meorize the value until data has changed
// So the component will safe more time next time when re-render.
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

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = '';
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        console.log('This was Computed!');
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data]);

    return (
        <>
            <h1>UseMemo</h1>
            <p>{getLongestName}</p>
            <button
                onClick={() => { setToggle(!toggle) }}
            >
                Toggle
            </button>
            {toggle && <h1>Toggle!</h1>}
        </>
    )
}

export default UseMemo