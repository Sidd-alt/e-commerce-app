import { useState } from "react";
import FormInput from "../form-input/form-input-component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";
import Button from "../button/button-component";
import './sign-up-form-style.scss'

const initialFormFields = {
   displayName: "",
   email: "",
   password: "",
   confirmPassword: ""
}

const SignUpForm = () => {

   const [formFields, setFormFields] = useState(initialFormFields);
   const {displayName, email, password, confirmPassword} = formFields;   

   const handleChange = (event) => {
      const {name, value} = event.target;
      setFormFields({...formFields, [name]: value})
   }

   const resetFormFields = () => {
      setFormFields(initialFormFields)
   }
 
   const handleSubmit = async (event) => {
      event.preventDefault();
      if(password !== confirmPassword){
         return alert("Password and Confirm Password does not match")
      }
      
      try {
         const { user } = await createAuthUserWithEmailAndPassword(email, password)
         
         await createUserDocumentFromAuth(user, { displayName })
         resetFormFields()
      } catch (error) {
         if (error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use');
         } else {
            console.log('user creation encountered an error', error);
         }
      }
   }

   return (
      <>
         <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
               <FormInput 
                  label={'Display Name'}
                  onChange={handleChange} 
                  value={displayName} 
                  type={'text'} 
                  required 
                  name="displayName"
               />

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

               <FormInput 
                  label={"Confirm Password"}
                  onChange={handleChange} 
                  value={confirmPassword} 
                  type={"password"} 
                  required 
                  name="confirmPassword"
               />
               <Button buttonType={"google"} type="submit" >Sign UP</Button>
            </form>
         </div>
      </>
   )
}

export default SignUpForm;