import React, {Component} from 'react';
import {TextInput, Button, View} from 'react-native';
import { observer, inject } from "mobx-react";

@inject("store")
@observer
export default class ItemManager extends Component<Props> {
	addItem = this.addItem.bind(this);
	removeItem = this.removeItem.bind(this);

	constructor(props) {
		super(props);
		this.state = { input: 'Useless Placeholder' };
	}

	addItem(){
		this.props.store.addItem(this.state.input)
	}

	removeItem(){
		this.props.store.removeItem()
	}

	render() {
		return (
			<View>
				<TextInput
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={(input) => this.setState({input})}
					value={this.state.input}
				/>
				<Button
					onPress={this.addItem}
					title="add item"
					color="#00f"
					accessibilityLabel="add an item to the list"
				/>

				<Button
					onPress={this.removeItem}
					title="remove item"
					color="#f00"
					accessibilityLabel="remove an item from the list"
				/>
			</View>
		)
	}
}
