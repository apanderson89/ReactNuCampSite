import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import Modal from "reactstrap/lib/Modal";
import { Control, LocalForm } from "react-redux-form";
import Label from "reactstrap/lib/Label";
import { throwStatement } from "@babel/types";

class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampsiteInfo: null,
    };
  }
  render() {
    if (this.props.campsite) {
      return (
        <div className="container">
          <div className="row">
            <RenderCampsite campsite={this.props.campsite} />
            <RenderCampsite comments={this.props.comments} />
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
          <Card onClick={() => this.onCampsiteSelect(campsite)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
            <CardImgOverlay>
              <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
            <CardBody>
              <CardText>{campsite.description}</CardText>
            </CardBody>
          </Card>
          {this.renderComments(campsite.comments)}
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{this.props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{this.props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={this.props.campsite} />
          <RenderComments comments={this.props.comments} />
        </div>
      </div>
    );
  }
  function RenderComments(props) {
    console.log(props.comments);
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
        </div>
      );
    }
  }

  class CommentForm extends Component {
    render() {
      <React.Fragment>
      <Button Outline onClick={this.toggleModal}>
          <i className="fa fa-lg fa-pencil"></i>
          Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader> Submit Feedback</ModalHeader>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <div className="form-group">
              <Label hmtlFor="rating">Rating</Label>
              <Control.select
              className= "form-control"
              id= "rating"
              name ="rating"
              model ="rating">
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
              <Label hmtlFor="author">Author</Label>
              <Control.text
              className= "form-control"
              id= "Author"
              name ="Author"
              model ="Author">
              </Control.text>
                
            </div>
            <div className="form-group">
              <Label hmtlFor="comment">Comment</Label>
              <Control.text
              className= "form-control"
              id= "Comment"
              name ="Comment"
              model ="Comment">
              </Control.text>
                
            </div>
    <div>
      <Button type="submit" color="primary">Submit</Button>
      </div>
      </Modal>
      </LocalForm>
      </React.Fragment>
    }
  }

  }
export default CampsiteInfo;
