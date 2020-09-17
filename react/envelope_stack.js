import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEnvelopeOpen, faEnvelopeOpenText, far, fas } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

class EnvelopeStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialCount: 40
    }
  }

  render() {
    return (
      <div>
        <Button
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            size='5x'
          >
          </FontAwesomeIcon>
        </Button>
        <Badge pill variant="primary">{this.state.initialCount}</Badge>
      </div>
    );
  }
}

export default EnvelopeStack