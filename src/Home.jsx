import React, { useEffect, useState } from 'react'
import MaterialTable from "material-table";
import { Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Form from "./Form"

const Home = () => {

    const history = useNavigate();

    const [state, newstate] = useState([])

    useEffect(() => {
        const functions = async () => {
            const response = await fetch('http://localhost:8000/fetch');
            const data = await response.json()
            newstate(data);
        }

        functions()

    }, [])

    for (let i = 0; i < state.length; i++) {

        state.forEach((item, index) => {
            if (i === index) {
                item.id = i + 1;
            }
        });
    }

    const column = [
        { title: 'ID', field: "id" },
        { title: "Name", field: "fname" },
        { title: "Email", field: "email" }
    ]

    return (
        <>
            <Container className='mb-5'>
                <Form />

                <MaterialTable
                    columns={column}
                    data={state}
                    title="Notices"
                    style={{ borderRadius : "10px" }}

                    options={{
                        paging: true,
                        search: true,
                        sorting: true,
                        rowStyle: {
                            backgroundColor: '#FFF',
                            fontSize: '14px'
                        },
                        headerStyle: {
                            backgroundColor: '#EEE',
                            fontWeight: 'bold'
                        }
                    }}

                    actions={[
                        {
                            icon: 'delete',
                            tooltip: 'Delete',
                            onClick: async (event, rowData) => {

                                const response = await fetch(`http://localhost:8000/delete/${rowData._id}`, {
                                    method: 'DELETE',
                                });
                                const data = await response.text();

                                alert(data);
                                window.location.reload();
                            }
                        },
                        {
                            icon: 'print',
                            tooltip: 'Print',
                            onClick: (event, rowData) => {
                                history(`/details/${rowData._id}`)
                            }
                        }
                    ]}
                />

            </Container>
        </>
    )
}

export default Home