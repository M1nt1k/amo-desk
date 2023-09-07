import { useEffect, useState, use } from 'react';
import CONFIG from '../config/conf'
import AddRmBtn from './addRmBtn';
import LineParam from './lineParams';
import LineType from './lineType';

import API from '../api/API'

export default function OptionsBlock() {
    // const [lineParam, lineType, lineWidth, lineColor] = useState(0)
    // const [ready, setsReady] = useState(0)

    // const components = [<option value="Не выбрано">Не выбрано</option>]

    // useEffect(() => {
    //     const username = CONFIG.username;
    //     const host = CONFIG.host;

    //     fetch("http://" + host + ":8000/reference/" + username)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(typeof(data))
    //         Object.keys(data).forEach((key, index) => {
    //             components.push(<option key={index} label={data[key]} value={data[key]}></option>)
    //         })

    //         setsReady(true)
    //         console.log(components.length)
    //     })
    //     .catch((error) => console.log(error));

        
    // }, [components]);

    // const [references, getReferences] = useState([])

    // useEffect(() => {
    //     //    API.getReference()
    //     // .then((data) => {
    //     //     getReferences(data)
    //     // })
    //     // .catch((e) => console.log(e))

    //     // console.log(references)
    // }, []);

    // const references = use(API.getReference())

    // console.log(references)

    return (
        <div className='options-block' >
            <LineType />
            <LineParam />
            <AddRmBtn />
        </div>
    );
}