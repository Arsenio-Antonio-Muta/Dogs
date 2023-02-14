import React from "react";
import { Navigate, Route } from "react-router-dom";



const ProtectRoute = (props) => {

  if (login === true) return <Route {...props} />
  else if (login === false) return
  else return null;
}

export default ProtectRoute;