import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner"
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundaries from "../errorBoundaries/ErrorBoundaries";
import decoration from '../../resources/img/vision.png';
import ComicsList from "../comicsList/ComicsList";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () =>{
    
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }    
           
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <ErrorBoundaries>
                                        <RandomChar/>
                                </ErrorBoundaries>
                            
                                <div className="char__content">
                                    <ErrorBoundaries>
                                            <CharList onCharSelected = {onCharSelected}/>
                                    </ErrorBoundaries>
                                    
                                    <ErrorBoundaries>
                                        <CharInfo charId={selectedChar}/>
                                    </ErrorBoundaries>
                                    
                                </div>
                                <img className="bg-decoration" src={decoration} alt="vision"/>
                            </>
                        }/>


                        <Route path="/comics" element={<>
                                                        <AppBanner/>
                                                        <ComicsList/>
                                                        </>
                        }/>


                    </Routes>
                </main>
            </div>
        </Router>
    )
    
}

export default App;