import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";


// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const SEND_MESSAGE = 'SEND-MESSAGE';
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage:
        {
            posts: [
                { id: 1, message: 'Hi how r u?', likeCount: '17' },
                { id: 2, message: 'Hello everyone', likeCount: '22' }
            ],
            newPostText: ''
        },

        dialogsPage:
        {
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hello' },
                { id: 1, message: 'how r u?' }
            ],
            dialogs: [
                { id: 1, name: 'Oleg' },
                { id: 2, name: 'Danya' },
                { id: 3, name: 'Dima' },
                { id: 4, name: 'Viktor' }
            ],
            newMessageText: ''
        },

        sidebar: {
            bestFriends: [
                { id: 1, name: 'Kirill' },
                { id: 2, name: 'Pavel' },
                { id: 3, name: 'Maria' }
            ]
        }

    },

    _callSubscriber() {
        return
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost () {
    //     let newPost = {
    //         id: 3,
    //         message: this._state.profilePage.newPostText,
    //         likeCount: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';

    //     this._callSubscriber(this._state);
    // },

    // updateNewPostText (newText) {
    //     this._state.profilePage.newPostText = newText;

    //     this._callSubscriber(this._state);
    // },

    // sendMessage () {
    //     let newMessage = {
    //         id: 1,
    //         message: this._state.dialogsPage.newMessageText
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';

    //     this._callSubscriber(this._state);
    // },

    // updateNewMessageText (newText) {
    //     this._state.dialogsPage.newMessageText = newText;

    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 3,
        //         message: this._state.profilePage.newPostText,
        //         likeCount: 0
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';

        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;

        //     this._callSubscriber(this._state);
        // } else if (action.type === SEND_MESSAGE) {
        //     let newMessage = {
        //         id: 1,
        //         message: this._state.dialogsPage.newMessageText
        //     };
        //     this._state.dialogsPage.messages.push(newMessage);
        //     this._state.dialogsPage.newMessageText = '';

        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.dialogsPage.newMessageText = action.newText;

        //     this._callSubscriber(this._state);
        // }
    }
}

// export const addPostActionCreator = () => ({
//     type: ADD_POST
// })

// export const updateNewPostTextActionCreator = (text) => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
// })

// export const addMessageActionCreator = () => ({
//     type: SEND_MESSAGE
// })

// export const updateNewMessageTextActionCreator = (text) => ({
//     type: UPDATE_NEW_MESSAGE_TEXT,
//     newText: text
// })


export default store;
window.store = store;

// let rerenderEntireTree = () => {
//     // console.log('yhdthtd');
//     return
// }

// let state = {
//     profilePage: 
//     {
//         posts: [
//             { id: 1, message: 'Hi how r u?', likeCount: '17' },
//             { id: 2, message: 'Hello everyone', likeCount: '22' }
//         ],
//         newPostText: ''
//     },

//     dialogsPage:
//     {
//         messages: [
//             { id: 1, message: 'hi' },
//             { id: 2, message: 'hello' },
//             { id: 1, message: 'how r u?' }
//         ],
//         dialogs: [
//             { id: 1, name: 'Oleg' },
//             { id: 2, name: 'Danya' },
//             { id: 3, name: 'Dima' },
//             { id: 4, name: 'Viktor' }
//         ],
//         newMessageText: ''
//     },

//     sidebar : {
//         bestFriends: [
//             {id: 1, name: 'Kirill'},
//             {id: 2, name: 'Pavel'},
//             {id: 3, name: 'Maria'}
//         ]
//     }
// }

// export const addPost = () => {
//     let newPost = {
//         id: 3,
//         message: state.profilePage.newPostText,
//         likeCount: 0
//     };
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';

//     rerenderEntireTree(state);
// }

// export const updateNewPostText = (newText) => {
//     state.profilePage.newPostText = newText;

//     rerenderEntireTree(state);
// }

// export const sendMessage = () => {
//     let newMessage = {
//         id: 1,
//         message: state.dialogsPage.newMessageText
//     };
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessageText = '';

//     rerenderEntireTree(state);
// }

// export const updateNewMessageText = (newText) => {
//     state.dialogsPage.newMessageText = newText;

//     rerenderEntireTree(state);
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

// export default state;