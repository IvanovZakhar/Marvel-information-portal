import './singlePage.scss';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import AppBanner from '../appBanner/AppBanner';



const SinglePage = () => {

    const {comicId} = useParams();
    const {character} = useParams();
    const [page, setPage] = useState(null);
    const {error, loading, getComic, clearError, getCharacterByName} = useMarvelService();
    
    useEffect(() => {
     
         updateComic() 
    }, [comicId])
    
    useEffect(() => {
         updateChar()  
    }, [character])


    const updateComic = () => {
      
        if (comicId){
            console.log('ok')
            clearError();
            getComic(comicId)
                .then(onpageLoaded)
        }
    }

    const updateChar = () => {
        if(character){
            clearError();
            getCharacterByName(character)
                .then(onpageLoaded)
        }
    }

    const onpageLoaded = (page) => {
   
        setPage(page);  
    }

    // const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || !page) ? <View page={page}/> : null;

    return (
        <>
            <AppBanner/>
            {/* {errorMessage} */}
            {spinner}
            {content}
        </>
    )
}

const View = ({page}) => {
 
    const {name, title, img, thumbnail, pageCount, language, description, price} = page;

    return (
        <div className="single-page">
            <img src={img ? img : thumbnail} alt={title ? title : name} className="single-page__img"/>
            <div className="single-page__info">
                <h2 className="single-page__name">{title}</h2>
                <p className="single-page__descr">{description}</p>
                <p className="single-page__descr">{pageCount ? pageCount : null}</p>
                <p className="single-page__descr">{language ? `Language: ${language}` : null}</p>
                <div className="single-page__price">{price ? price : null}</div>
            </div>
            {name ? 
                <Link to="/" className="single-page__back">Back to all</Link> : 
                <Link to="/pages" className="single-page__back">Back to all</Link>}
        </div>
    )
}

export default SinglePage;