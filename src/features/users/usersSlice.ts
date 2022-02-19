import {createAsyncThunk, createEntityAdapter, createSlice, EntityState} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {User} from '../../app/types'

// createEntityAdapterで作ったAdapterでは、
// addOne, addMany, setAll, updateOne, selectAllなど、
// DDDでいうRepository的なことがすでに実装されている。
// https://redux.js.org/tutorials/essentials/part-6-performance-normalization
// https://redux-toolkit.js.org/api/createEntityAdapter
// https://zenn.dev/himorishige/articles/771655988846d9
const usersAdapter = createEntityAdapter<User>({
    // 以下はIDを取得する関数の定義
    selectId: (user) => user.id,
});

// UserのEntityStateで初期化
// https://www.cyokodog.net/blog/redux-toolkit-entity-adapter/
const initialState: EntityState<User> = usersAdapter.getInitialState({
    // id: 'tkugimot',
    // name: 'Toshimitsu Kugimoto',
    // aaa: "a"
});

// ユーザを引っ張ってくる関数の型定義
export const {
    // ここに記載するのは EntitySelectors に実装されているメソッド
    selectAll: selectAllUsers,
    selectById: selectUserById // 右辺には使うメソッド名をカスタムで定義
} = usersAdapter.getSelectors<RootState>(state => state.users)


// Userを引っ張ってくる
// 一人だけユーザを引っ張る処理だけ書いておく。
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    return [{
        id: "tkugimot",
        name: "Toshimitsu Kugimoto."
    }]
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.fulfilled.type]: usersAdapter.setAll
    }
})

export default usersSlice.reducer;
