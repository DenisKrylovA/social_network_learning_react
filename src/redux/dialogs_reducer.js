const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hello' },
        { id: 3, message: 'how r u?' }
    ],
    dialogs: [
        { id: 1, name: 'Oleg' },
        { id: 2, name: 'Danya' },
        { id: 3, name: 'Dima' },
        { id: 4, name: 'Viktor' }
    ]
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages,{ id: 4,  message: newMessage }]
            };    
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
})
export default dialogsReducer;