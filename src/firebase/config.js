import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC0OZ8-1gV8Fktrz-mD6nv9Ww4eSpZP8P8",
    authDomain: "prog8110liveserver.firebaseapp.com",
    databaseURL: "https://prog8110liveserver-default-rtdb.firebaseio.com",
    projectId: "prog8110liveserver",
    storageBucket: "prog8110liveserver.appspot.com",
    messagingSenderId: "993622285176",
    appId: "1:993622285176:web:ada90c409dec1d6405c68d"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };