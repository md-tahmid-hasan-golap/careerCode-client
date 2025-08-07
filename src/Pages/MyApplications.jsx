import React, { Suspense } from "react";
import ApplicationState from "./ApplicationState";
import ApplicationListS from "./ApplicationListS";
import UseContext from "../Huks/UseContext";
import { myApplicationPromised } from "../api/applicationApi";

const MyApplications = () => {
  const { user } = UseContext();
  return (
    <div>
      <ApplicationState></ApplicationState>
      <Suspense fallback={"lodind your application"}>
        <ApplicationListS
          myApplicationPromised={myApplicationPromised(user.email)}
        ></ApplicationListS>
      </Suspense>
    </div>
  );
};

export default MyApplications;
