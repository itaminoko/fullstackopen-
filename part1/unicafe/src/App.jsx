import {useState} from 'react'


const Header = (props) => {
    return (<div>
            <h1>{props.text}</h1>
        </div>

    )
}

const StatisticLine = (props) => {
    return (<tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>)
}

const Statistics = ({good, neutral, bad, text}) => {

    const all = good + neutral + bad

    if (all === 0) {
        return (<p>No feedback given</p>)
    }

    const average = ((good - bad) / all).toFixed(2)
    const posPercentage = ((good * 100) / all).toFixed(2)

    return (<div>
            <h1>{text}</h1>
            <table>
                <tbody>
                <StatisticLine text={'good'} value={good}/>
                <StatisticLine text={'neutral'} value={neutral}/>
                <StatisticLine text={'bad'} value={bad}/>
                <StatisticLine text={'average'} value={average}/>
                <StatisticLine text={'positive'} value={posPercentage}/>
                </tbody>
            </table>


        </div>)
}
const Button = (props) => (<button onClick={props.onClick}>{props.text}</button>)

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const header = 'give feedback'
    const header2 = 'statistics'


    const increaseGood = () => setGood(good + 1)
    const increaseNeutral = () => setNeutral(neutral + 1)
    const increaseBad = () => setBad(bad + 1)

    return (<div>
            <Header text={header}/>

            <Button onClick={increaseGood} text={'good'}/>
            <Button onClick={increaseNeutral} text={'neutral'}/>
            <Button onClick={increaseBad} text={'bad'}/>

            <Statistics text={header2} good={good} neutral={neutral} bad={bad}/>
        </div>)

}

export default App