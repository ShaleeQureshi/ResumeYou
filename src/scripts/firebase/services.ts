import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, onValue, update } from "firebase/database";

const auth = getAuth();
const database = getDatabase();

// Logs a user in using their Google account
export const Login = async () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result: object) => {
      console.log(result.user);
      WriteUserInfo(
        result.user.email,
        result.user.displayName,
        result.user.photoURL,
        result.user.uid
      );
    })
    .catch((error: object) => {
      console.log(error);
    });
};

// Helper methods
const WriteUserInfo = (
  email: string,
  displayName: string,
  photoURL: string,
  uid: string
) => {
  const split_name = displayName.split(" ");
  const firstName = split_name[0];
  const lastName = split_name[1];
  const entry = {
    email: email,
    first_name: firstName,
    last_name: lastName,
    photoURL: photoURL,
    uid: uid,
  };

  const email_list_entry = {
    email: email,
  };

  const updates = {};
  updates["/users/" + uid + "/info/"] = entry;
  updates["/email-list/"] = email_list_entry;
  update(ref(database), updates)
    .then(() => {
      console.log("Success");
    })
    .catch((error: object) => {
      console.log(error);
    });
};
