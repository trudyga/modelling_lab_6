import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

class ValuesList extends React.Component {
    constructor(props) {
        super(props);

        this.data = props.data;
    }

    render() {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>Загальна кількість точок</TableHeaderColumn>
                        <TableHeaderColumn>Розв'язок</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        this.data.map((el, i) => <TableRow>
                            <TableRowColumn>{i}</TableRowColumn>
                            <TableRowColumn>{Math.pow(10, el.amount)}</TableRowColumn>
                            <TableRowColumn>{el.value}</TableRowColumn>
                        </TableRow>)
                    }
                </TableBody>
            </Table>
        );
    }
}

export default ValuesList;