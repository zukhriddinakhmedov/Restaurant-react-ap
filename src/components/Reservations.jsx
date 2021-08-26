//we will need the state here
// the plan is to bind our JSX with the state (map over it)

import { Component } from 'react'
import { ListGroup, Alert, Spinner } from 'react-bootstrap'

class Reservations extends Component {
    //1)create an empty state,make room for our reservations that we are going to grab from the api
    //2)create some JSX that maps over our state,generating all the time a list out of it
    //3) we have now to FILL that state with our reservations


    //1)
    state = {
        reservations: [],
        isLoading: true,
        isError: false
    }

    clickHandler = (e) => {
        //does not create its own scope
        //so it inherits the outside one
        //and this is why we get 'this' to be used
        console.log(e)
        this.setState({
            reservations: []
        })
    }
    //3)
    componentDidMount = async () => {
        console.log("I am componentDidMount")

        //component DidMount will always happen JUST ONCE!!!

        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/reservation")
            if (response.ok) {
                let reservations = await response.json()

                this.setState({
                    reservations,
                    isLoading: false
                })
            } else {
                console.log('Something went wrong with the server')
                this.setState({
                    isLoading: false,
                    isError: true
                })
            }
        } catch (error) {
            console.log(error)
            this.setState({
                isLoading: false,
                isError: true
            })
        }
    }

    render() {

        //the render method fires AGAIN every time there is a change in the STATE
        //or in the PROPS of the component
        console.log("I am the render")

        //? : this is the ternary operator
        //&& this is the short-circuit operator
        return (
            <div className="text-center">
                <h2 onClick={this.clickHandler}>RESERVATIONS</h2>
                {
                    this.state.isLoading &&
                    <Spinner animation="border" variant="success" className="mx-auto" />
                }
                {
                    this.state.isError &&
                    <Alert variant="danger">
                        An error occured!
                    </Alert>


                }
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