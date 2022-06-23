import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getDatabase, ref, child, push, set, update } from "firebase/database";

const auth = getAuth();
const database = getDatabase();

// Functions

// Login (email, password) = Takes in an email and password one of two things
//  occur:
//  1. Information is valid: Authenticate user and take them to their profile
//  2. Information is invalid: Display an error message
const Login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      // go to profile page
    })
    .catch((error) => {
      alert(error);
    });
};

const SignUp = async (
  first_name,
  last_name,
  student_or_advisor,
  email,
  password
) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log(cred.user);
      alert("You have successfully registered with ResumeYou!");

      // Adding user signup info in database
      const entry = {
        uid: cred.user.uid,
        email: cred.user.email,
        first_name: first_name,
        last_name: last_name,
        student_or_advisor: student_or_advisor,
      };
      const updates = {};
      updates["/users/" + cred.user.uid + "/user_info"] = entry;
      update(ref(database), updates);

      // Take them to their profile
    })
    .catch((error) => {
      alert(error);
    });
};

export { Login, SignUp };
