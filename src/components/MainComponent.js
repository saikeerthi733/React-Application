import React,{Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Route,Switch,Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            leaders:LEADERS,
            promotions:PROMOTIONS,
            comments:COMMENTS
                };
    }
   
        
    
    render(){
        const HomePage=()=>{
            return(
                <Home
                    dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                    leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
                    promotion={this.state.promotions.filter((promo)=>promo.featured)[0]}
                />
            );
        }
        const DishID=({match})=>{
            return(
                <Dishdetail 
                dish={this.state.dishes.filter((dish)=>dish.id=== parseInt(match.params.dishId,10))}
                comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}/>
            );
        }
        return(
            <div>
                <Header/>
                <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
                <Route exact path="/contactus" component={Contact}/>
                <Redirect to="/home"/>
                </Switch>
                <Footer />
            </div>
        );
    }
    
}
export default Main;
