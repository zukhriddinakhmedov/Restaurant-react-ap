//bcz we need a state we will generate this component as a class
import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

//name 
//phone 
//number of people
// smoking
//dateTime
//Special requirements
class ReservationForm extends Component {
    state = {
        reservation: {
            name: '',
            phone: '',
            numberOfPeople: 1,
            smoking: false,
            dateTime: '',
            specialRequests: ''
        }
    }

    handleInput = (e, propertyName) => {

        this.setState({
            reservation: {
                ...this.state.reservation,
                //copying over phone,numberOfPeople,smoking etc
                [propertyName]: propertyName === 'smoking'
                    ? e.target.checked
                    : e.target.value,
            }
        })
    }

    render() {
        return (
            <div className="text">
                <h2>Make a reservation</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>Your name?</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Insert your name"
                            value={this.state.reservation.name}
                            onChange={(e) => this.handleInput(e, 'name')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Your phone?</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Insert your phone"
                            value={this.state.reservation.phone}
                            onChange={(e) => this.nandleInput(e, 'phone')}
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Number of people?</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="Do you smoke?" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>When?</Form.Label>
                        <Form.Control type="datetime-local" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Any special request?</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default ReservationForm