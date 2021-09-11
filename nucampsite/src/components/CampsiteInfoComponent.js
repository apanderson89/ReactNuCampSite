import { Component } from "react";
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
export default CampsiteInfo;
