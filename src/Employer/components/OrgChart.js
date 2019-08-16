import React, { Component } from 'react';
import OrgCharts from '@latticehr/react-org-chart';
import sampleOrgChart from 'orgchart';

// import sampleOrgChart from 'orgchart';
export default class OrgChart extends Component {
shouldComponentUpdate(){
    return false;
}
componentDidMount() {
    
   this.org_chart = new OrgCharts(this.refs.org_chart,{
        'tree': { "id": 1, "person": { "name": "Fouad Matin" }, "children": [] },
        'nodeWidth':180,
        'nodeHeight':100,
        'nodeSpacing':12,
        'animationDuration':350
    });
}

    render() {
        return (
            <div id="org_chart" ref="org_chart">
                
            </div>
        )
    }
}
