import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
	apiKey            : 'AIzaSyCOLhuAzZDO6vQW5hRKKO11oUGaxqnLJbE',
	authDomain        : 'm-city-e852b.firebaseapp.com',
	databaseURL       : 'https://m-city-e852b.firebaseio.com',
	projectId         : 'm-city-e852b',
	storageBucket     : 'm-city-e852b.appspot.com',
	messagingSenderId : '579918490204',
	appId             : '1:579918490204:web:a45600d56e5cfb56a51499',
	measurementId     : 'G-6SCYFHBWFM'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export { firebase, firebaseMatches, firebasePromotions, firebaseTeams, firebasePlayers, firebaseDB };
