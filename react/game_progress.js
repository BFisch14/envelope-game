import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'




class GameProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seatsFullError: false,
      disabled: false
    }
    this.togglePlay = this.togglePlay.bind(this);
    this.seatsNotFull = this.seatsNotFull.bind(this);
  }


  async togglePlay(val) {

    this.setState({ disabled: true });
    this.setState({ seatsFullError: false });
    if (!this.props.isStarted) {
      console.log(this.props.gameID);
      console.log(this.props.facilitatorId);
      await fetch(`/api/start-game/${this.props.facilitatorId}/${this.props.gameID}`)

    } else {
      await fetch(`/api/stop-game/${this.props.facilitatorId}/${this.props.gameID}`)
    }
    this.setState({ disabled: false });

  }

  seatsNotFull() {
    this.setState({ seatsFullError: true });
  }

  render() {
    let ic = this.props.isStarted ? faPause : faPlay;
    const facilID = this.props.facilitatorId;
    return (
      <div >
        <Card style={{ width: '25em' }}>
          <Card.Body>

            <h1>Money Earned</h1>
            {facilID &&
              <FontAwesomeIcon icon={ic} spin onClick={this.props.seatsFull ? this.togglePlay : this.seatsNotFull} disabled={this.state.disabled} />
            }
            {facilID && this.state.seatsFullError &&
              <h5>Error: Seats are not Full yet</h5>
            }
            <p> {this.props.t1Name} --- VS --- {this.props.t2Name}</p>
            <h2 >
              ${this.props.team1Score}
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {this.props.gameTick ? Math.floor(((this.props.gameTick % 3600) / 60)) : '0'}:{this.props.gameTick ? this.props.gameTick % 60 : '0'}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    ${this.props.team2Score}
            </h2>

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default GameProgress;
