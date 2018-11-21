import React, {Component} from 'react';
import {ListView, Text} from 'react-native';
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class ListItem extends Component<Props> {
	render() {
		return (
			<ListView
				dataSource={this.props.store.itemsDataSource}
				renderRow={(rowData) => <Text>{rowData}</Text>}
			/>
		)
	}
}
