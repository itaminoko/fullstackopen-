const Header = (props) => {
    console.log(props)
    return (<div>
        <h1>{props.header}</h1>
    </div>)
}
const Part = (props) => (<p>{props.part.name} ({props.part.exercises})</p>)

const Content = (props) => {
    console.log(props)
    return (<div>
        <Part part={props.parts[0]}/>
        <Part part={props.parts[1]}/>
        <Part part={props.parts[2]}/>
    </div>)
}

const Total = (props) => (<div>
        <h3>Total: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</h3>
    </div>


)

const App = () => {

    const course = {
        name: 'Half Stack application development', parts: [{
            name: 'Fundamentals of React', exercises: 10
        }, {
            name: 'Using props to pass data', exercises: 7
        }, {
            name: 'State of a component', exercises: 14
        }

        ]
    }

    return (<div>
        <Header header={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
    </div>)

}

export default App
