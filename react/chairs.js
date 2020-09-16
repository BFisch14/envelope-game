import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChair} from '@fortawesome/free-solid-svg-icons'
import {faSquareFull} from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './index.css'
class Chairs extends Component {
    constructor(props)
    {
        super(props);
    }
    async chooseSeat(index, seat_id, gameID)
    {
        console.log(seat_id);
        const response = await fetch(`/api/choose-seat/${gameID}/${seat_id}`)
        const json = await response.json();
        console.log(json);
        // api/chooseSeat/gameID/seatID
    }

render() {
    var team1Chairs = []
    var team2Chairs = []
    //var workArea = []
    var chairs = this.props.seats;
    const gameID = this.props.gameID;
    chairs.forEach((c, index) => {
    if (c.is_team_1) {
        team1Chairs.push(<li><button className={c.is_taken ? "chairFilled" : "chairNotFilled"} disabled={c.is_taken ? true : false} onClick={() => this.chooseSeat(index, c.seat_id, gameID)}>
        <FontAwesomeIcon icon={faChair} size = '7x' color={c.is_taken ? 'blue' : 'black'} />
        </button> <FontAwesomeIcon icon={faSquareFull} size ='7x' color='brown'/></li>);
        
    }
    else {
    team2Chairs.push(<li><FontAwesomeIcon icon={faSquareFull} size ='7x' color='brown'/>
    <button className={c.is_taken ? "chairFilled" : "chairNotFilled"} disabled={c.is_taken ? true : false} onClick={() => this.chooseSeat(index, c.seat_id, gameID)}>
        <FontAwesomeIcon icon={faChair} size = '7x' color={c.is_taken ? 'blue' : 'black'} />
    </button></li>);
    }
    //workArea.push()  
        });
    return (
        <div>
            <Container>
                <Row>
                <Col><ul className = "chairColumn">{team1Chairs}</ul></Col>
                <Col><ul className = "chairColumn">{team2Chairs}</ul></Col>
                </Row>
            </Container>
        </div>
    )
    }
}

export default Chairs;