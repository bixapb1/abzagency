import React from "react";
import "./style/app.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, getPositions, getUsers, getToken } from "./redux/action";
import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import Card from "./components/card/card";
import Button from "./components/button/button";
import Form from "./components/form/form";
import Preloader from "./components/preloader/preloader";
import { ReactComponent as Success } from "./assets/svg/success-image.svg";

function App() {
  const dispatch = useDispatch();
  const { users, success, page, btnShowMore, loading } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getPositions());
    dispatch(getUsers());
    dispatch(getToken());
  }, [dispatch]);

  function showMore(page) {
    dispatch(setPage(page));
    dispatch(getUsers());
  }

  return (
    <>
      <Header />
      <Banner />
      <div className="container">
        <h1 id="users" className="title">
          Working with GET request
        </h1>
        <div className="grid">
          {users.map((user) => (
            <Card key={user.id} user={user} />
          ))}
          {loading && <Preloader />}
        </div>
        {btnShowMore && (
          <Button
            handler={() => showMore(page)}
            style={{ margin: "50px 0 140px 0 " }}
            text="Show more"
          />
        )}

        <h1
          id="SignUp"
          className="title"
          style={btnShowMore ? {} : { marginTop: "50px" }}
        >
          {success
            ? "User successfully registered"
            : "Working with POST request"}
        </h1>
        {success ? <Success style={{ margin: "0 0 100px 0" }} /> : <Form />}
      </div>
    </>
  );
}

export default App;
