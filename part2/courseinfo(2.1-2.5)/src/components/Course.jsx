const Header = (props) => {
    return (
        <h2>{props.name}</h2>
    )
}
const Part = ({ part }) => (<li>{part.name}  {part.exercises}</li>)

const Content = (props) => {
    const { parts } = props
    return (
        <ul>
            {parts.map(part => <Part key={part.id} part={part}/>)}
        </ul>
    )
}

const Total = ({ parts }) => {

    const total = parts.map(part => part.exercises).reduce((sum, part) => sum + part, 0)

    return (
        <h4>total of {total} exercises</h4>
    )

}

const Course = (props) => {
    const { id, name, parts } = props.course

    return (
        <div>
            <Header name={name}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
            <hr />
        </div>
    )
}

export default Course
