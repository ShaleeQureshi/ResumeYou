import { ErrorData } from "@firebase/util";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  UserCredential,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  onValue,
  update,
  set,
  DataSnapshot,
} from "firebase/database";
import { Dispatch, SetStateAction } from "react";

const auth = getAuth();
const database = getDatabase();

// Database references
const EMAIL_LIST_REF: string = "/email-list/";
const USERS_REF: string = "/users/";

// Logs a user in using their Google account
export const Login = async (navigate: any) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result: UserCredential) => {
      if (
        result.user.email != null &&
        result.user.displayName != null &&
        result.user.photoURL != null
      ) {
        WriteUserInfo(
          result.user.email,
          result.user.displayName,
          result.user.uid
        );
        navigate("/profile/" + result.user.email);
      }
    })
    .catch((err: ErrorData) => {
      console.log(err);
      return false;
    });
};

// Helper methods
const WriteUserInfo = (email: string, displayName: string, uid: string) => {
  const split_name = displayName.split(" ");
  const firstName = split_name[0];
  const lastName = split_name[1];

  onValue(
    ref(database, `${EMAIL_LIST_REF}/${uid}`),
    (snapshot: DataSnapshot) => {
      if (snapshot.val().email == null) {
        update(ref(database, `${USERS_REF}/${uid}/info`), {
          email: email,
          first_name: firstName,
          last_name: lastName,
          uid: uid,
        })
          .then(() => {
            console.log("Success");
          })
          .catch((err: ErrorData) => {
            console.log(err);
          });
        update(ref(database, `${EMAIL_LIST_REF}/${uid}`), {
          email: email,
        })
          .then(() => {
            console.log("Success");
          })
          .catch((err: ErrorData) => {
            console.log(err);
          });
      }
    }
  );
};
