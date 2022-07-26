import React from 'react'
import { useState } from 'react';

const Forms = () => {

    const [state, newstate] = useState({
        fname: "",
        email: ""
    });

    const changed = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        newstate((oldata) => {
            return {
                ...oldata,
                [name]: value
            }
        })
    }

    const action = (e) => {
        e.preventDefault();

        fetch('http://localhost:8000/sendata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(state)
        }).then((response) => {
            return response.text()
        }).then((data) => {
            alert(data);
            window.location.reload()
        }).catch((error) => {
            alert(error);
            console.log(error)
        });
    }

    return (
        <>
            <h1>{`${state.fname} ${state.email}`}</h1>
            <form onSubmit={action}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" required onChange={changed} id="name" name='fname' value={state.value} />
                </div> 

                <div className="mb-3">
                    <label for="emailid" className="form-label">Email address</label>
                    <input type="email" className="form-control" required onChange={changed} id="emailid" name='email' value={state.value} />
                </div>
                <button className="btn">Submit</button>
            </form>
        </>
    )
}

export default Forms