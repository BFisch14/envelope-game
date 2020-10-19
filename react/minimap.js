import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEnvelopeOpen, faEnvelopeOpenText, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as faEnvelopeClear } from '@fortawesome/free-regular-svg-icons'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import MinimapStatus from './minimap_status'


class Minimap extends Component {

  render() {

    return (
      <Container fluid>
        <Row>
          <Col lg={false}>
            <h5>Team {this.props.t1Name} Progress</h5>
            <h7>Money Earned: ${this.props.team1Score}</h7><br/> 
            <h7>Envelopes Completed: </h7>
            <MinimapStatus
              envelopes={this.props.envelopes}
              seatNumber={0}
              isTeam1={1}
              gameTick={this.props.gameTick}
            >
            </MinimapStatus>
            <MinimapStatus
              envelopes={this.props.envelopes}
              seatNumber={1}
              isTeam1={1}
              gameTick={this.props.gameTick}
            >
            </MinimapStatus>
            <MinimapStatus
              envelopes={this.props.envelopes}
              seatNumber={2}
              isTeam1={1}
              gameTick={this.props.gameTick}
            >
            </MinimapStatus>
          </Col>
          <Col md="auto">
            {this.props.gameTick ? Math.floor(((this.props.gameTick % 3600) / 60)) : '0'}:{this.props.gameTick ? this.props.gameTick % 60 : '0'}
          </Col>
          <Col lg={false}>
          <h5>Team {this.props.t2Name} Progress</h5>
            <h7>Money Earned: ${this.props.team2Score}</h7><br/> 
            <h7>Envelopes Completed: </h7> 
            <MinimapStatus
              envelopes={this.props.envelopes}
              seatNumber={0}
              isTeam1={0}
              gameTick={this.props.gameTick}
            >
            </MinimapStatus>
            <MinimapStatus
              envelopes={this.props.envelopes}
              seatNumber={1}
              isTeam1={0}
              gameTick={this.props.gameTick}
            >
            </MinimapStatus>
            <MinimapStatus
              envelopes={this.props.envelopes}
              seatNumber={2}
              isTeam1={0}
              gameTick={this.props.gameTick}
            >
            </MinimapStatus>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Minimap