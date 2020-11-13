import { useState, useEffect } from 'react'
import CardUtente from './CardUtente.js'
import Loading from './Loading.js'

function ListaUtenti() {

    const [utenti, setUtenti] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(usersJson => setUtenti(usersJson))
    }, [])

    if (utenti.length < 1) return <Loading />

    return <div className="lista-utenti"> 
        <h2 className="title">Lista Utenti</h2>
        {
            utenti.map((utente, idx) => {
                return <CardUtente key={idx} utente={utente} />
            })
        }
    </div>
}

export default ListaUtenti;