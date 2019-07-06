import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle} from 'reactstrap';

class Dishdetail extends Component{
    renderDish(dish){
        if (dish!=null){
            return(
                <div class="col-12 col-md-5 m-1">
                <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>

                </Card>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }

    }
    renderComments(comments){
        if (comments==null){
            return(<div></div>)
        }
        const conn=comments.map((comment)=>{
            return (
                <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                </p>
            </li>
            );
    });
    return(
        <div className="col-12 col-md-5 m-1">
            <ul className="unstyled">
                {conn}
            </ul>
        </div>
    )
}
    render(){
        const dishdetail=this.props.dish
        if(dishdetail==null){
            return (<div></div>)
        }
        else{
            return(
                <div className="row">
                    {this.renderDish(dishdetail)}
                    {this.renderComments(dishdetail.comments)}
                </div>
            )
        }
    }
}
export default Dishdetail;
