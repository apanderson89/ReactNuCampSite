import { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedCampsiteInfo: null
        };
    }
    
        renderCampsite(campsite) {
            if (campsite){
            return(
                <div className="col-md-5 m-1">
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                                <CardImgOverlay>
                                    <CardTitle>{campsite.name}</CardTitle>
                                </CardImgOverlay>
                                <CardBody><p>{campsite.description}</p></CardBody>
                            </Card> 
                            {this.renderComments(campsite.comments)}
                </div>

            )
        }
                return(
                <div />
                )
        }
    renderComments(comments){
    console.log(comments)
         if (comments) {
            return(
            <div className="col">
                <h4>Comments</h4>
                {comments.map ((comment =>
                    <p key={comment.id}> 
                      {comment.text}<br/> 
                      --{comment.author}, 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(
                        new Date(Date.parse(comment.date)))}
                        </p>))}
            </div>)
        }
    }
    render() {
        if (this.props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderCampsite(this.props.campsite)}
                        {this.renderComments(this.props.campsite.comments)}
                    </div>
                </div>
            );
        }
        return <div />;
    }

}
export default CampsiteInfo;