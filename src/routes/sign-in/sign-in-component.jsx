import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils"

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
      </>
   )
}

export default SignIn