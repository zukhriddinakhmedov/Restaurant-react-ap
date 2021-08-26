//we will need the state here
// the plan is to bind our JSX with the state (map over it)

import { Component } from 'react'

class Reservations extends Component {




    state = {
        reservations: []
    }

    render() {
        return (
            <div className="text-center">
                <h2>RESERVATIONS</h2>
                <ListGroup>
                    {
                        this.state.reservations.map(reservation => (
                            <ListGroup.Item>RESERVATION</ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}

export default Reservations