import { useState } from "react";
import FormInput from "../form-input/form-input-component";
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase-utils";
import Button from "../button/button-component";
import './sign-in-form-style.scss'

const initialFormFields = {
   email: "",
   password: ""
}

const SignInForm = () => {

   const [ formFields, setFormFields ] = useState(initialFormFields);
   const { email, password } = formFields;   

   const signInWithGoogle = async () => {
      try{
         const { user } = await signInWithGooglePopup();
         createUserDocumentFromAuth( user )
      } catch(err) {
         console.log(err)
      }
   } 

   const handleChange = (event) => {
      const {name, value} = event.target;
      setFormFields({...formFields, [name]: value})
   }

   const resetFormFields = () => {
      setFormFields(initialFormFields);
   }
 
   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await signInAuthUserWithEmailAndPassword(email, password);
         console.log(response);
         resetFormFields();
      } catch (error) {
         switch (error.code) {
            case "auth/wrong-password":
            alert("Incorrect password")
               break;
            case "auth/user-not-found":
            alert("User not found")
               break;
            default:
               break;
         }
         console.log(error)
      }
   }

   return (
      <>
         <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
               
               <FormInput 
                  label={"Email"}
                  onChange={handleChange} 
                  value={email} 
                  type={"email"} 
                  required 
                  name="email"
               />

               <FormInput
                  label={"Password"} 
                  onChange={handleChange} 
                  value={password} 
                  type={"password"} 
                  required 
                  name="password"
               />

               <div className="buttons-container">
                  <Button type="submit" >{"Sign In"}</Button>
                  <Button type="button" onClick={signInWithGoogle} buttonType={"google"} >{"GOOGLE Sign In"}</Button>
               </div>
               
            </form>
         </div>
      </>
   )
}

export default SignInForm;