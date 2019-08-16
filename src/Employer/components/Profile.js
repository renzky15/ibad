import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import d3 from 'd3';
import {OrgCharts} from '@latticehr/react-org-chart';
import {loremIpsum} from 'lorem-ipsum';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';

// import OrgChart from 'orgchart';
// import OrgChartsss from '../components/OrgChart';
export default class Profile extends Component {


    state = {
        
        

            "tree": { "id": 1, "person": { "name": "Fouad Matin" }, "children": [] }

        
    };
    orgChart = () => {
        // let datascource = {
        //     'id': '1',
        //     'name': 'Su Miao',
        //     'title': 'department manager',
        //     'relationship': '111',
        //     'children': [
        //       { 'id': '2','name': 'Tie Hua', 'title': 'senior engineer', 'relationship': '110' },
        //       { 'id': '3','name': 'Hei Hei', 'title': 'senior engineer', 'relationship': '111' }
        //     ]
        //   }

        // let orgchart = new OrgChart({
        //     'chartContainer': '#chart-container',
        //     'data' : datascource,
        //     'depth': 2,
        //     'nodeContent': 'title',
        //     'exportButton': true,
        //     'exportFilename': 'MyOrgChart'
        //     });

        //     return orgchart


        // const orgchart = new OrgChart({
        //     'tree':tree
        // });

        // return orgchart
    };
    componentDidMount() {

    }
    render() {
        const testt = {
            id: "1",
            person: {
                name: "Fouad Matin"
            },
            children:[]
        }
        const justify = {
            'text-align':'justify'
        }
        const initechOrg = {
            name: "Bill Lumbergh",
            actor: "Gary Cole",
            children: [
              {
                name: "Peter Gibbons",
                actor: "Ron Livingston",
                children: [
                  {
                    name: "And More!!",
                    actor: "This is just to show how to build a complex tree with multiple levels of children. Enjoy!"
                  }
                ]
              },
              {
                name: "Milton Waddams",
                actor: "Stephen Root"
              },
              {
                name: "Bob Slydell",
                actor: "John C. McGi..."
              },
            ]
          };
          const MyNodeComponent = ({node}) => { 
              return ( 
                <div className="initechNode" onClick={() => alert("Hi my real name is: " + node.actor)}> { node.name } </div>); 
            }

        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            Company Profile
    </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="#">Employer</a></li>
                            <li className="active">Company profile</li>
                        </ol>
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-md-3">
                                {/* Profile Image */}
                                <div className="box box-primary">
                                    <div className="box-body box-profile">
                                        <img className="profile-user-img img-responsive img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile picture" />
                                        <h3 className="profile-username text-center">Renz LTD</h3>
                                        <p className="text-muted text-center">Trading Manufacturer</p>
                                        <ul className="list-group list-group-unbordered">
                                            <li className="list-group-item">
                                                <b>Employees</b> <a className="pull-right">1,322</a>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Following</b> <a className="pull-right">543</a>
                                            </li>
                                            <li className="list-group-item">
                                                <b>Friends</b> <a className="pull-right">13,287</a>
                                            </li>
                                        </ul>
                                        <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                                {/* About Me Box */}
                                <div className="box box-primary">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">About Me</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <strong><i className="fa fa-book margin-r-5" /> Education</strong>
                                        <p className="text-muted">
                                            B.S. in Computer Science from the University of Tennessee at Knoxville
            </p>
                                        <hr />
                                        <strong><i className="fa fa-map-marker margin-r-5" /> Location</strong>
                                        <p className="text-muted">Malibu, California</p>


                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                            </div>
                            {/* /.col */}
                            <div className="col-md-9">
                                <div className="nav-tabs-custom">
                                    <ul className="nav nav-tabs">
                                        <li className="active"><a href="#activity" data-toggle="tab">Activity</a></li>
                                        <li><a href="#org_chart" data-toggle="tab">Organizational Chart</a></li>
                                        <li><a href="#about" data-toggle="tab">About</a></li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="active tab-pane" id="activity">
                                            {/* Post */}

                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="org_chart">
                                            {/* The org_chart */}
                                            {/* {this.orgChart()}
                                             */}

                                            <div id = "orgChart">
                                                <h1>Org Chart</h1>

                                                {/* {this.orgChart} */}

                                             {/* <OrgCharts tree={testt}/>  */}
                                            <OrgChart tree={initechOrg} NodeComponent={MyNodeComponent} />
                                            </div>


                                        </div>
                                        {/* /.tab-pane */}
                                        <div className="tab-pane" id="about">
                                            <dl className="dl-horizontal">


                                                <dt>Mission</dt>
                                                <dd style= {justify}> {loremIpsum({count:7})}</dd>
                                                <br/>

                                                <dt>Vision</dt>
                                                <dd style= {justify}>{loremIpsum({count:7})}</dd>

                                              
                                            </dl>
                                        </div>
                                        {/* /.tab-pane */}
                                    </div>
                                    {/* /.tab-content */}
                                </div>
                                {/* /.nav-tabs-custom */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>
                <div className="control-sidebar-bg">

                </div>


            </div>
        )
    }
}
