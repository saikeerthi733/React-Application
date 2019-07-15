import React ,{Component} from 'react';
import {Card,CardImg,CardBody,CardImgOverlay,CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {Link} from 'react-router-dom';
class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const menu=this.props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card >
                        <Link to={`/menu/${dish.id}`}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                        </Link>
                    </Card>
                </div>
            );
        });
        console.log('render invoked');
        return(
            
            <div className="container">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                <Link to="/menu">Menu</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                </div>
            </div>

        );
    }
}
export default Menu;