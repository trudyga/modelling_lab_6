import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';


import MonteCarlo from '../services/monte-carlo';
import Statistics from '../services/statistics';

import ValuesList from './ValuesList';
import Graph from './Graph';

export default class CardExampleControlled extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };

        const f = x => Math.sin(x);
        const monte = new MonteCarlo(f, { min: 0, max: Math.PI/2 }, { min: 0, max: 1 });

        function createData(amount) {
            const res = [];
            for (let i = 1; i < amount; i++) {
                let value = monte.solve(Math.pow(10, i));

                res.push({ amount: i, value });
            }

            return res;
        }

        function createStatistics(sample, index) {
            const statistics = new Statistics(sample);

            console.log(statistics);
            console.log(sample);
            console.log(index);
            const mathExpect = statistics.expectation();
            const deviation = statistics.deviation();

            const delta = mathExpect - sample[index];

            return {
                amount: Math.pow(10, index),
                delta
            };
        }

        const data = createData(7);
        this.data = data;
        this.grapData = data.map((obj, i) => createStatistics(data.map(o => o.value), i));
    }

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };

    handleToggle = (event, toggle) => {
        this.setState({ expanded: toggle });
    };

    handleExpand = () => {
        this.setState({ expanded: true });
    };

    handleReduce = () => {
        this.setState({ expanded: false });
    };

    render() {
        return (
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title="y = sin(x)"
                    subtitle="[0 .. pi/2]"
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardMedia
                    expandable={true}
                >
                    <div>
                        <h4>Список точок</h4>
                        <ValuesList data={this.data}/>
                    </div>
                    <div style={{ width: 450 + 'px', height: 450 + 'px' }}>
                        <h4>Графік похибки</h4>
                        <Graph grapData={this.grapData} />
                    </div>
                </CardMedia>
                <CardActions>
                    <FlatButton label="Expand" onClick={this.handleExpand} />
                    <FlatButton label="Reduce" onClick={this.handleReduce} />
                </CardActions>
            </Card>
        );
    }
}