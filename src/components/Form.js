// We Must Import the React Library
import React from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const Form = (props) => {
  //The component must return some JSX
  return <div>
    <form>
        <input type="text"/>
        <input type="submit" value="submit"/>
    </form>
  </div>
};

// We must export the component to use it in other files
export default Form;