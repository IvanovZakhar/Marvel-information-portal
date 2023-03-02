import './search-hero-form.scss'
import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';

const SearchHeroForm = () => {
    const {getCharacterByName} = useMarvelService();
    const [character, setCharacter] = useState(false)
    const [error, setErrors] = useState(false)
    function onSetCharacter (character){
        setCharacter(character)
        setErrors(false)
        if(character === 'The character was not found. Check the name and try again'){
            setErrors(character)
        }
     
    }

 
const showError = error ? <View error={character}/> : null;
const showName = error && !character ? null : <View name={character.name}/>;
const showLink = character.name ? <Link to={`/characters/${character.name}`}/> : null;
    return(
  
        <div className='search-hero-form'>
            <h3>Or find a character by name:</h3>
            <Formik 
                initialValues={{name:''}}
                validate={values =>{
                    const errors = {}
                    if(!values.name){
                        errors.name = 'This field is required'
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
                        {showError}
                        {showName}
                        {showLink}
                          
                    </Form>
                
            </Formik>
        </div>
    )
}


const View = ({error, name}) => {
    const result = error ? "error" : "found";
    const elem = name ? `There is! Visit ${name} page?` : null;
    return(
        <div className={result}>
           {error}
           {elem}
        </div>
    )
}
export default SearchHeroForm;