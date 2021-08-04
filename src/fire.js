import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyDFdf5aqF4j6ZhhLown-2-WKtMu6dZ3LQc",
    authDomain: "login-fb199.firebaseapp.com",
    projectId: "login-fb199",
    storageBucket: "login-fb199.appspot.com",
    messagingSenderId: "619499438773",
    appId: "1:619499438773:web:e50af046c12758b76374fc",
    measurementId: "G-0011E9M8HR"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;