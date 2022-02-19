import {selectAllUsers, selectUserById} from "./usersSlice";
import {useTypedSelector} from "../../app/store";
import {useParams} from "react-router-dom";

// 渡ってくるパスパラメータの型定義
type Params = {
    userId: string
}
export const UserPage = () => {
    // もしパラメータがなかった時は空文字を渡す
    const { userId } = useParams<Params>() || '';

    console.log(userId)
    const users = useTypedSelector(
        // ケツの「!」はnullでないことs示す(Linterに怒られなくなる)
        state => selectAllUsers(state)
    )!
    console.log(users);

    const user = useTypedSelector(
        // ケツの「!」はnullでないことを示す(Linterに怒られなくなる)
        state => selectUserById(state, userId!)
    )!
    console.log(user)

    return (
        <section>
            <h1>hello</h1>
            <h2>{user !== undefined ? user.name : ''}</h2>
        </section>
    )
}

export default UserPage
