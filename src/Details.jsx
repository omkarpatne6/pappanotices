import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const Details = () => {
    const { slug } = useParams()

    const [state, newstate] = useState([])

    useEffect(() => {

        const fetchdata = async () => {
            const response = await fetch(`http://localhost:8000/details/${slug}`);
            const data = await response.json();
            console.log(data)
            newstate([data])
        }

        fetchdata()
    }, [])

    return (
        <>
            <Container>
                <ul>
                   {state.map((item, index)=>{
                    return <li key={index}>{item.fname}</li>
                   })}
                </ul>
            </Container>
        </>
    )
}

export default Details