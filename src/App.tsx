import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navbar} from "./app/components/Navbar";
import UserPage from "./features/users/UserPage";
import {useAppDispatch} from "./app/hooks";
import {useSelector} from "react-redux";
import {RootState} from "./app/store";
import {fetchUsers} from "./features/users/usersSlice";

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

    console.log(users);
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="App">
                <Routes>
                    <Route path='/users/:userId' element={<UserPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
