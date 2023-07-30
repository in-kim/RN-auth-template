import AuthContent from '../components/Auth/AuthContent';
import {useState} from "react";
import {createUser} from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const signupHandler = async ({email, password}) => {
    setIsAuthenticating(true);

    try{
      const res = await createUser({email, password});
      console.log('creater User', res);
    }catch (e){
      console.error(e);
    }

    setIsAuthenticating(false);
  }

  if(isAuthenticating){
    return <LoadingOverlay message="Creating user..."/>
  }

  return <AuthContent onAuthenticate={signupHandler}/>;
}

export default SignupScreen;
