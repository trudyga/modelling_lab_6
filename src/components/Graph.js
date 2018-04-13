import React, { Component } from 'react';
import * as V from 'victory';

class Graph extends Component {
    constructor (props) {
        super(props);

        this.grapData = props.grapData;
    }

    render() {
        return (
            <V.VictoryChart
                scale={{x: "log", y: "linear"}}
                theme={V.VictoryTheme.material}>
                <V.VictoryLine
                    style={{
                        data: { stroke: "black"},
                        parent: { border: "1px solid #ccc"}
                    }}
                    labels={this.grapData.map((d, i) => i + 1)}
                    data={this.grapData}
                    // data accessor for x values
                    x="amount"
                    // data accessor for y values
                    y="delta"
                />
            </V.VictoryChart>
        );
    }
}

export default Graph;