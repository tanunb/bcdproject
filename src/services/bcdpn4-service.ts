// =====================================
//  |
//  |  To initialize the database
//  |  
// =====================================

import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

@Injectable()
export class bcdService{
	private _db;
	private _bcd;
	// -- To initialize the database, if it does not exist, a new database will be created -- //
	initDB(){
		PouchDB.plugin(cordovaSqlitePlugin);
		this._db = new PouchDB('bcd.db', {adapter: 'cordova-sqlite'});
		
	}

	getAll() {
		// if (!this._bcd){
		// 	return this._db.allDocs({ include_docs: true})
		// 		.then(docs => {
		// 			this._bcd = docs.rows.map(row => {
		// 				row.doc.Name = new Date(row.doc.Name);
		// 				return row.doc;				
		// 			});

		// 			this._db.changes({ live: true, since: 'now', include_docs:true})
		// 				.on('change', this.onDatabaseChange);
		// 			return this._bcd;
		// 		});
		// } else {
		// 	return Promise.resolve(this._bcd);
		// }
	}

	private onDatabaseChange = (change) => {
		// var index = this.findIndex(this._bcd, change.id);
		// var name = this._bcd[index];

		// change.doc.Name = new Name(change.doc.Name);
		// if (name && name._id === change.id) {
		// 	this._bcd[index] = change.doc;	
		// } else {
		// 	this._bcd.splice(index, 0, change.doc) // insert
		// }
	}

	// Binary search, the array is by default sorted by _id
	private findIndex(array, id){
		// var low = 0, high = array.length, mid;
		// while (low < high) {
		// 	mid = (low + high) >>> 1;
		// 	array[mid]._id < id ? low = mid + 1 : high = mid
		// }
		// return low;
	}
}
	
