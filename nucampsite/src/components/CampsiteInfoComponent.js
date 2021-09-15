import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardImgOverlay,
    CardTitle,
    Button,
    ModalHeader,
    ModalBody
} from "reactstrap";
import Modal from "reactstrap/lib/Modal";
import { Control, LocalForm, Errors } from "react-redux-form";
import Label from "reactstrap/lib/Label";

class CampsiteInfo extends Component {
    render() {
        if (this.props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={this.props.campsite} />
                        <RenderComments comments={this.props.comments}/>
                    </div>
                </div>
            );
        }
        return <div />;
    }
}

function RenderCampsite(props) {
    const campsite = props.campsite;
    if (campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                    <CardImgOverlay>
                        <CardTitle>{campsite.name}</CardTitle>
                    </CardImgOverlay>
                    <CardBody>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return null
    }
}
function RenderComments(props) {
    if (props.comments) {
        return (
            <div className="col">
                <h4>Comments</h4>
                {props.comments.map((comment) => (
                    <p key={comment.id}>
                        {comment.text}
                        <br />
                        --{comment.author},
                        {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                        }).format(new Date(Date.parse(comment.date)))}
                    </p>
                ))}
                <CommentForm/>
            </div>
        );
    } else {
        return null
    }
}

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength= len => val => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            rating: '',
            comment: '',
            author: ''
        }
    }

    toggleModal = () => {
        const {isModalOpen} = this.state;
        this.setState({
            isModalOpen: !isModalOpen
        })
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return (
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                    <i className="fa fa-lg fa-pencil"/>
                    Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader> Submit Feedback</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select
                                    className= "form-control"
                                    id= "rating"
                                    name ="rating"
                                    model =".rating">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author">Author</Label>
                                <Control.text
                                    className= "form-control"
                                    id= "author"
                                    name ="author"
                                    model =".author"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(10)
                                    }}/>
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required:"required",
                                        minLength:"Must be at least 2 characters",
                                        maxLength: "Must be 10 characters or less"
                                    }}>
                                </Errors>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.text
                                    className= "form-control"
                                    id="comment"
                                    name ="comment"
                                    model =".comment">
                                </Control.text>
                            </div>
                            <div>
                                <Button type="submit" color="primary">Submit</Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}
export default CampsiteInfo;
