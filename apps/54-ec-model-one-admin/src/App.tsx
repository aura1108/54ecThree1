import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserAuthList } from "./userAuth/UserAuthList";
import { UserAuthCreate } from "./userAuth/UserAuthCreate";
import { UserAuthEdit } from "./userAuth/UserAuthEdit";
import { UserAuthShow } from "./userAuth/UserAuthShow";
import { UserDetailList } from "./userDetail/UserDetailList";
import { UserDetailCreate } from "./userDetail/UserDetailCreate";
import { UserDetailEdit } from "./userDetail/UserDetailEdit";
import { UserDetailShow } from "./userDetail/UserDetailShow";
import { UserDocumentList } from "./userDocument/UserDocumentList";
import { UserDocumentCreate } from "./userDocument/UserDocumentCreate";
import { UserDocumentEdit } from "./userDocument/UserDocumentEdit";
import { UserDocumentShow } from "./userDocument/UserDocumentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"54ec-model-one"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="UserAuth"
          list={UserAuthList}
          edit={UserAuthEdit}
          create={UserAuthCreate}
          show={UserAuthShow}
        />
        <Resource
          name="UserDetail"
          list={UserDetailList}
          edit={UserDetailEdit}
          create={UserDetailCreate}
          show={UserDetailShow}
        />
        <Resource
          name="UserDocument"
          list={UserDocumentList}
          edit={UserDocumentEdit}
          create={UserDocumentCreate}
          show={UserDocumentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
