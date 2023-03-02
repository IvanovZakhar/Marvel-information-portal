import './search-hero-form.scss'
import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';

const SearchHeroForm = () => {
    const {getCharacterByName} = useMarvelService();
    const [character, setCharacter] = useState('')
    const [error, setErrors] = useState(true)
    function onSetCharacter (character){
        setCharacter(character)
        setErrors(false)
        if(character === 'The character was not found. Check the name and try again'){
            setErrors(true)
        }
     
    }
  
    return(
        <div className='search-hero-form'>
            <h3>Or find a character by name:</h3>
            <Formik 
                initialValues={{name:''}}
                validate={values =>{
                    const errors = {}
                    if(!values.name){
                        errors.name = 'This field is required'
                    }else if(error){
                        errors.name = error
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                   
                    getCharacterByName(values.name)
                        .then(data => onSetCharacter(data))
                  }}>

                    <Form>
                        <Field
                            id="name"
                            name="name"
                            type="text"
                            as="input"
                            placeholder="Enter name"/>
                        
                        <button type="submit" >
                       
                        </button>
                        <ErrorMessage component="div" name="name"/>
 
                         <Link to={`/characters/${'thor'}`}>There is! Visit   page?</Link> 
                    </Form>
                
            </Formik>
        </div>
    )
}

export default SearchHeroForm;