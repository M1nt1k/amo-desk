import React, {Component} from "react";
import moment from 'moment';

import CONFIG from '../config/conf'
import InfoBlock from './infoBlock';

class TopBar extends Component {
    state = {
        well: 'Нет данных',
        data_collection_time: 'Нет данных',
        hook_weight: 'Нет данных',
        mechanical_speed: 'Нет данных',
        downhole_depth: 'Нет данных',
        bit_depth: 'Нет данных',
        over_the_bottom: 'Нет данных'
    }

    componentDidMount() {
        const username = CONFIG.username;
        const host = CONFIG.host;

        setInterval(() => {
            fetch("http://" + host + ":8000/topbar/" + username)
            .then((response) => response.json())
            .then((data) => {

                var date = moment(data['data_collection_time'])

                this.setState({
                    well: data['well'],
                    data_collection_time: date.format("HH:mm:ss DD.MM.YYYY"),
                    hook_weight: data['hook_weight'].toFixed(2),
                    mechanical_speed: data['mechanical_speed'].toFixed(2),
                    downhole_depth: data['downhole_depth'].toFixed(2),
                    bit_depth: data['bit_depth'].toFixed(2),
                    over_the_bottom: data['over_the_bottom'].toFixed(2)
                });
            })
            .catch((error) => console.log(error));
        }, 1000);
    }

    render () {
        return(
        <topbar className='topbar'>
            <span className='topbar-name'>{this.state.well}</span>
            <InfoBlock text='Время сбора данных' value={this.state.data_collection_time}/>
            <InfoBlock text='Вес на крюке, т' value={this.state.hook_weight}/>
            <InfoBlock text='Мех.скорость, м/час' value={this.state.mechanical_speed}/>
            <InfoBlock text='Глубина Забоя, м' value={this.state.downhole_depth}/>
            <InfoBlock text='Глубина долота, м' value={this.state.bit_depth}/>
            <InfoBlock text='Над забоем, м' value={this.state.over_the_bottom}/>
        </topbar>
    )};
}

export default TopBar;