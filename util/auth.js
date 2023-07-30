import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../firebase';
export async function createUser(params) {
  const auth = getAuth(app);

  return createUserWithEmailAndPassword(auth, params.email, params.password)
}
