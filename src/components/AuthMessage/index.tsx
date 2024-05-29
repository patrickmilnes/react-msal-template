import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

const AuthMessage = () => {
  return (
    <>
      <AuthenticatedTemplate>
        <p>You are logged in!</p>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are NOT logged in!</p>
      </UnauthenticatedTemplate>
    </>
  );
};

export default AuthMessage;
