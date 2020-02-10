import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAF33PpADS5ADJAnp_hHw52M9WxZwpnQfs",
  authDomain: "pineapple-113e2.firebaseapp.com",
  databaseURL: "https://pineapple-113e2.firebaseio.com",
  projectId: "pineapple-113e2",
  storageBucket: "pineapple-113e2.appspot.com",
  messagingSenderId: "602663555343"
};
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;
