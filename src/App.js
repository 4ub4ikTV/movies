import {Route, Routes} from "react-router-dom";

import './App.css'
import {MovieDetailPage, MoviesPage, NotFoundPage} from "./pages";
import {MainLayouts} from "./layouts";
function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayouts/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'/movies'} element={MoviesPage}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                    <Route path={'/movies/:movieID'} element={<MovieDetailPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
