import { useMsal } from "@azure/msal-react";

const SignInButton = () => {
  const { instance } = useMsal();

  return (
    <>
      <button onClick={() => instance.loginRedirect()}>Sign In</button>
    </>
  );
};

export default SignInButton;
