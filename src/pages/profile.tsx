import { User } from "firebase/auth";
import { DataSnapshot, getDatabase, onValue, ref } from "firebase/database";
import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { Image, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { Footer, Navigation } from "../components";
import { AuthContext } from "../scripts/context/auth";

const ProfilePage = (props: any) => {
  const context = useContext(AuthContext);
  const email = context.currentUser.email;
  const displayName = context.currentUser.displayName;
  const USER_PHOTO = context.currentUser.photoURL;
  //console.log(USER_PHOTO);
  const navigate = useNavigate();
  const database = getDatabase();

  const [valid, setValid] = useState<boolean>(false);

  // useEffect(() => {
  //   async () => {
  //     const url: string = window.location.href;
  //     const split: string[] = url.split("/");
  //     const email = split[split.length - 1];
  //     const p = await ValidProfilePage(email);
  //     console.log(p);
  //   };
  // }, []);

  useEffect(() => {
    const url: string = window.location.href;
    const split: string[] = url.split("/");
    const email = split[split.length - 1];
    onValue(ref(database, "/email-list/"), (snapshot: DataSnapshot) => {
      Object.values(snapshot.val()).forEach((children: any) => {
        if (children.email == email) {
          setValid(true);
        }
      });
    });
  }, [valid]);

  if (!valid) {
    return (
      <div>
        <Navigation />
        <div className="wrapper">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={USER_PHOTO} />
            <Card.Body>
              <Card.Title>{displayName}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary"></Button>
            </Card.Body>
          </Card>
          {/* <Image src={`${USER_PHOTO}`} rounded />
        <h1>{displayName}</h1>
        <h1>{email}</h1> */}
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Navigation />
        <div className="wrapper">
          <div className="center">
            <PropagateLoader size={10} color="#36d7b7" speedMultiplier={0.5} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};
export default ProfilePage;
