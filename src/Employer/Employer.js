import React, { Component } from 'react'
import Header from '../Employer/components/Header';
import Menu from '../Employer/components/Menu';
import Footer from '../Employer/components/Footer';
import Profile from '../Employer/components/Profile';
import Job from '../Employer/components/Job';
import JobOffer from '../Employer/components/JobOffer';
import JobDetail from '../Employer/components/JobDetail';
import OrgChart from '../Employer/components/OrgChart';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';



export default class Employer extends Component {
    render() {
        return (
            <Router>
                <Switch>
                <div>
                    <Header/>
                    <Menu/>

                    <Route path="/employer/profile" component ={Profile}/>
                    <Route path="/employer/mail" component ={Profile}/>
                    <Route path="/employer/job" exact={true} component ={Job}/>
                    {/* <Route path="/employer/job" exact={true} component ={Job}/> */}
                    <Route path = "/employer/job/jobOffer/create" exact={true} component={JobOffer}/>
                    <Route path = "/employer/job/jobOffer/view/:postId" component={JobDetail}/>
                    <OrgChart/>
                    <Footer/>
                </div>
                </Switch>
            </Router>
            
        )
    }
}
