import './charList.scss';
import { Component } from 'react/cjs/react.production.min';
import abyss from '../../resources/img/abyss.jpg';
import MarvelService from '../../services/MarvelService';
class CharList extends Component {


    marvelService = new MarvelService();
    
    componentDidMount(){
        this.getChar();
    }


    onCharLoaded = (char) => {
        this.setState({char})
        console.log(this.state)    
    }

    getChar = () => {
            for(let i = 0; i <= 8 ; i++){
                this.marvelService
                .getCharacter(1011000 + i)
                .then(this.onCharLoaded)
                
            }

    }
    

  
    render(){

        return (
            <div className="char__list">
                <ul className="char__grid">
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item char__item_selected">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                    <li className="char__item">
                        <img src={abyss} alt="abyss"/>
                        <div className="char__name">Abyss</div>
                    </li>
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

    
    
}

export default CharList;