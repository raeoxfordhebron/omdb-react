// We Must Import the React Library
import React from "react";
import {useState} from "react"

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
const Form = (props) => {
// state for the form
const [formData, setFormData] = useState({searchterm: ""})
// handleChange to sync formData and the form inputs
const handleChange = (event) => {
    // update the formData with the change in the form
    setFormData({...formData, [event.target.name]: event.target.value})
}
// function for submitting the form
const handleSubmit = (event) => {
    // prevent refresh
    event.preventDefault()
    // get the data
    props.moviesearch(formData.searchterm)
}
  //The component must return some JSX
  return <div>
    <form onSubmit={handleSubmit}>
        <input type="text" name="searchterm" value={formData.searchterm} onChange={handleChange}/>
        <input type="submit" value="submit"/>
    </form>
  </div>
};

export default Form;