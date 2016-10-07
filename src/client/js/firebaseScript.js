const firebase = require('firebase')
// const firebaseApp = require('firebase/app')
// const firebaseAuth = require('firebase/auth')
// const firebase = require('./firebase.js')
  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyCFY-S8TpPSV6jwa2WeXIjtKklNbNqwGHY",
    authDomain: "arsenal-nyc-events.firebaseapp.com",
    databaseURL: "https://arsenal-nyc-events.firebaseio.com",
    storageBucket: "arsenal-nyc-events.appspot.com",
    messagingSenderId: "544073222233"
  };

firebase.initializeApp(config);
// <script src="https://www.gstatic.com/firebasejs/3.4.0/firebase.js"></script>

// <script>
//   var app = firebase.initializeApp({
//     apiKey: "AIzaSyCFY-S8TpPSV6jwa2WeXIjtKklNbNqwGHY",
//     authDomain: "arsenal-nyc-events.firebaseapp.com",
//     databaseURL: "https://arsenal-nyc-events.firebaseio.com",
//     storageBucket: "arsenal-nyc-events.appspot.com",
//     messagingSenderId: "544073222233"
//   });
//   // ...
// </script>
