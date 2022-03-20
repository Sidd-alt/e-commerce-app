import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";


const SignIn = () => {

   const logUser = async () => {
      try{
         const { user } = await signInWithGooglePopup();
         createUserDocumentFromAuth( user )
      } catch(err) {
         console.log(err)
      }
   } 

   return(
      <>
         <h1>This is sign in page</h1>
         <button onClick={logUser}>SIGN IN WITH GOOGLE POPUP</button>
         <SignUpForm />
      </>
   )
}

export default SignIn