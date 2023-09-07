import { useEffect, useState } from "react"
import API from "../api/API"

export default function TimeInterval() {
    const [time, setTime] = useState([])

    useEffect(() => {
        API.getTimeData()
        .then(
            setTime([])
        )
        .catch((e) => console.log(e))
    })

    return (
        <div className='interval-row'>
            <input type="date" className='interval-input'></input>
            <input type="date" className='interval-input'></input>
        </div>
    )
}