import { observable, action, computed } from "mobx";
import {ListView} from 'react-native';

class ItemStore {
	@observable items = [
		"toto", "titi", "tata"
	];

	@action addItem = (newItem) => {
		this.items.push(newItem)
	}

	@action removeItem = () => {
		this.items.pop()
	}

	ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

	@computed get itemsDataSource() {
		return this.ds.cloneWithRows(this.items.slice());
	}
}

export default new ItemStore()
