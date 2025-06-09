import { auth } from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

async function createNewUser(email, senha) {
  if (!email || !senha) {
    return false;
  }
  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    return true;
  } catch (err) {
    console.error(err);
  }

  return false;
}

async function signIn(email, senha) {
  if (!email || !senha) {
    return false;
  }

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    return true;
  } catch (err) {
    console.error(err);
  }

  return false;
}

async function resetPassword(email) {
  if (!email) {
    return false;
  }

  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (err) {
    console.error(err);
  }
  return false;
}

export { createNewUser, signIn, resetPassword };
