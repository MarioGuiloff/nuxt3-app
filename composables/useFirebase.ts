import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export const createUser = async (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password).catch(
    (error) => {
      console.log(error);
    }
  );
};

export const signInUser = async (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password).catch((error) => {
    console.log(error);
  });
};

export const initUser = async () => {
  const auth = getAuth();
  const firebaseUser = useFirebaseUser();
  firebaseUser.value = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log("Auth changed", user);

      // ...
    } else {
      // User is signed out
      // ...
    }
    firebaseUser.value = user;
  });
};

export const signOutUser = async () => {
  const auth = getAuth();
  return auth.signOut();
};
