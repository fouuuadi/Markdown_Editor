import React from 'react'

//Documentation pour d'info : https://fr.legacy.reactjs.org/docs/state-and-lifecycle.html
//code fait par FOUAD LAMNAOUAR

class ShowTime extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    };

    //On monte le composant avec this.tick qui reprensente ID du minuteur
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000 // 1000miliseconde + 1seconde
        );
    }

    //On va ensuite démonter le composant en recuperent ID du timer
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    //methode tick
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='show_time'>
                <h1>Show Time</h1>
                <h2>Il est {this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()}</h2>
            </div>
        );
    }
}

export default ShowTime