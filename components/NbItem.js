import React, {Component} from 'react';
import {Text} from 'react-native';
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class NbItem extends Component<Props> {
	render() {
		return (
			<Text>
				{this.props.store.items.length}
			</Text>
		)
	}
}

export default NbItem