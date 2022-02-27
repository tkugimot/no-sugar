import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./app/components/Navbar";
import UserPage from "./features/users/UserPage";
import {useAppDispatch} from "./app/hooks";
import {useSelector} from "react-redux";
import {RootState} from "./app/store";
import {IndexPage} from "./app/components/IndexPage";
import {BlogPage} from "./app/components/BlogPage";

function App() {
    const dispatch = useAppDispatch()
    const users = useSelector<RootState>(state => state.users)
    const user = useSelector<RootState>(state => state.users)

    // useEffect(() => {
    //     console.log('usereffect')
    //     if (users === undefined) {
    //         dispatch(fetchUsers())
    //     }
    //     console.log(users);
    // }, [users, dispatch])

    return (
        <BrowserRouter basename="/no-sugar">
            <Navbar/>
            <div className="App bg-amber-50 container w-full md:max-w-3xl mx-auto pt-20">
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/blogs" element={<BlogPage />} />
                    <Route path='/users/:userId' element={<UserPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
