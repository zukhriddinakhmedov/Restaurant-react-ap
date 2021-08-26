import { Carousel, Col, Container, Row } from 'react-bootstrap'
import dishes from '../data/menu.json'
import { Component } from 'react'
import ReservationForm from './ReservationForm'
//dishes is an array of 5 objects
// eaach object is a pasta dish
//i wanna create a carousel slide for each pasta dish

//now we will implement a STATE in the HOME component
//the state can be declared ONLY in class copmnts
//bcs home currently is A functional component
//we need to convert it,pretty easy

class Home extends Component {

    //but now we can have a state
    state = {
        selectedDish: null,
        //the state of compnt is read-only
    }

    render() {
        return (
            <div>
                <Container>
                    <Row className="mt-3 justify-content-center">
                        <Col xs={12} md={6}>
                            <ReservationForm />
                        </Col>
                    </Row>
                    <Carousel>
                        {
                            dishes.map(dish => (
                                <Carousel.Item key={dish.name}>
                                    <img
                                        className="d-block w-100"
                                        src={dish.image}
                                        alt={dish.name}
                                        onClick={() => this.setState({
                                            //setState is the only way
                                            //to change the
                                            selectedDish: dish
                                        })}
                                    />
                                    <Carousel.Caption>
                                        <h3>{dish.name}</h3>
                                        <p>{dish.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }

                    </Carousel>
                    <Row>
                        <ul>
                            {
                                this.state.selectedDish?.comments.map(c => (
                                    <li key={c.id}>{c.comment}</li>
                                ))
                            }
                        </ul>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Home