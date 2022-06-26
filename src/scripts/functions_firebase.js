import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, onValue, update } from "firebase/database";
import history from "../scripts/history";

// Global references
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
      // Need to add parameter to view their specific profile
      history.push("/profile");
      window.location.reload();
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
      const email_list_entry = {
        email: cred.user.email,
      };
      var email_path = cred.user.email.replaceAll(".", "");
      alert(email_path);
      const updates = {};
      updates["/users/" + cred.user.uid + "/user_info"] = entry;
      updates["/email-list/" + email_path] = email_list_entry;
      update(ref(database), updates).then(() => {
        updateProfile(cred.user, {
          displayName: first_name + " " + last_name,
        });

        // Redirects them to the setup profile page
        history.push("/profile-setup");
        window.location.reload();
      });
    })
    .catch((error) => {
      alert(error);
    });
};

export { Login, SignUp };
