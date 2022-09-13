import './comicsList.scss';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';
import img from '../../resources/img/yana.jpg'

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [offset, setOffset] = useState(8)
    const {loading, error, getAllComics} = useMarvelService();
    const [charEnded, setCharEnded] = useState(false);

        useEffect(() => {
            onRequest(offset);
        }, []) 

    const onComicsListLoaded = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }
        setComicsList(comicsList => [...comicsList, ...newComicsList])
        setOffset(offset => offset + 8)
        setCharEnded(charEnded => ended)
    }

    const onRequest = (offset) => {
        getAllComics(offset)
        .then(onComicsListLoaded)
    }

    function renderItems(arr){
        const items = arr.map((item, i) => {
            console.log(item.img)
            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'none') {
                imgStyle = {'objectFit' : 'unset'};
            }
            return (
                    <li key={i} className="comics__item">
                        <a href="#">
                            <img style={imgStyle} 
                                 src={item.img === 'none' ? img : item.img} 
                                 alt={item.title} 
                                 className="comics__item-img"/>
                            <div className="comics__item-name">{item.title}</div>
                            <div className="comics__item-price">{item.price ? `${item.price}$` : 'Not on sale'}</div>
                        </a>
                    </li>
                    )
        })

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(comicsList);
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {items}
            {errorMessage}
            {spinner}
            <button
                 onClick={() => onRequest()} 
                 className="button button__main button__long"
                 style={{'display': charEnded ? 'none' : 'block'}}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}


export default ComicsList;