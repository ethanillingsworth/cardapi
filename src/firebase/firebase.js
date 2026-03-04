import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";
export class DataObject {
	collectionPath = "none";
	constructor(id) {
		this.id = id;
	}
	async get() {
		const r = await getDoc(doc(db, this.collectionPath, this.id));

		if (r.exists()) {
			return r.data();
		}
	}

	set() {}
}

export class Card extends DataObject {
	collectionPath = "cards";
}
