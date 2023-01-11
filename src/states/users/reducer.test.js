import usersReducer from "./reducer";

describe('UsersReducer function', () =>{
    it('should return the initial state when givn by unknown action', () => {
        const initialState = [];
        const action = {type : 'UKNOWN'};
        const nextState =  usersReducer(initialState,action);
        expect(nextState).toBe(initialState)
    })

    it('should return the user when given users/receive action', () =>{
        const initialState = [];
        const action ={
            type:'RECEIVE_USERS',
            payload:{
                users:[
                    {
                        id:"john_doe",
                        name:"John Doe",
                        email:"john@example.com",
                        avatar:"https://generated-image-url.jpg"
                    }
                ]
            }
        }
        const nextState = usersReducer(initialState,action);
        expect(nextState).toEqual(action.payload.users);
    })
})