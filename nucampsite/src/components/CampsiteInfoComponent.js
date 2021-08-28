import { Component } from "react";
//import { PopperPlacements } from "reactstrap/lib/utils";
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
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map ((comment =>
                    <div>
                     {comments (())}   
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </div>))}
            </div>)
        }
    }
    render(){
        console.log (this.props.campsite)
        return(
            <div>
                {this.renderCampsite(this.props.campsite)}
            </div>
        )
    }
}
export default CampsiteInfo;