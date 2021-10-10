import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const authenticationFirebase = () => {
         initializeApp(firebaseConfig);
}
export default authenticationFirebase;