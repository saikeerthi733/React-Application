import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardText,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from "react-router-dom";

class Dishdetail extends Component{
    RenderDish(dish){
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
    RenderComments(comments){
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
                <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{dishdetail}
                    </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={dishdetail} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={this.props.comment} />
                    </div>
                </div>
                </div>
            )
        }
    }
}
export default Dishdetail;
