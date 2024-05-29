import { useMsal } from "@azure/msal-react";

const SignOutButton = () => {
  const { instance } = useMsal();

  return (
    <>
      <button onClick={() => instance.logoutRedirect()}>Sign Out</button>
    </>
  );
};

export default SignOutButton;
