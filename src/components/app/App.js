import AppHeader from "../appHeader/AppHeader";
import {MainPage, ComicsPage, Page404, SingleComicPage} from "../pages/index"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () =>{
    

           
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path="/" element={<MainPage/>}/>
                        <Route path="/comics" element={ <ComicsPage/>}/>
                        <Route path="*" element={<Page404/>}/>
                        <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
    
}

export default App;