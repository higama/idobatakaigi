import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1Rp2z_IQPjNXxGNHiKsXHAWc3d6X9GCs",
  authDomain: "idobatakaigi-48017.firebaseapp.com",
  databaseURL: "https://idobatakaigi-48017-default-rtdb.firebaseio.com",
  projectId: "idobatakaigi-48017",
  storageBucket: "idobatakaigi-48017.appspot.com",
  messagingSenderId: "443583890005",
  appId: "1:443583890005:web:fd2714cc9e9cd892080adc",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref("messages");

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
