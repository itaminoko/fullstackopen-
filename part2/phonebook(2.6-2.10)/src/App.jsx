import {useState} from 'react'

const Filter = ({filter, setFilter}) => {
    return (
        <div>
            filter shown with:
            <input value={filter} onChange={e => setFilter(e.target.value.toLowerCase())}/>
        </div>
    )
}
const PersonForm = ({newName, setNewName, newNumber, setNewNumber, addPhoneNumber}) => {
    return (
        <div>
            <form onSubmit={addPhoneNumber}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={e => setNewNumber(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>

    )
}
const Persons = ({personsToShow}) => {
    return (
        <div>
            <ul>
                {personsToShow.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
            </ul>
        </div>
    )
}
const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-1234567', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')


    const personsToShow = persons.filter(person => person.name.toLowerCase().startsWith(filter))

    const addPhoneNumber = (event) => {
        event.preventDefault()

        if (!persons.some(person => person.name === newName)) {
            const phoneObject = {
                name: newName,
                number: newNumber,
                id: persons.length + 1
            }

            setPersons(persons.concat(phoneObject))
            setNewName('')
            setNewNumber('')
        } else {
            window.alert(`${newName} is already added to the phonebook`);
            setNewName('')
            setNewNumber('')
        }
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter}/>
            <h2>add a new</h2>
            <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}
                           addPhoneNumber={addPhoneNumber}/>
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow}/>

        </div>
    )
}

export default App