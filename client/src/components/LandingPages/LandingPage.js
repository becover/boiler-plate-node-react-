import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res));
  }, []);

  const onLogoutHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        props.history.push(`/login`);
      } else {
        alert("로그아웃에 실패 했습니다.");
      }
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <p>LandingPage</p>
      <button onClick={onLogoutHandler}>logout</button>
    </div>
  );
}

export default withRouter(LandingPage);
