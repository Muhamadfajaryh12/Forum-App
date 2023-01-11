import { hideLoading, showLoading } from "react-redux-loading-bar";
import API from "../../data/api";
import { asyncRegisterUser } from "./action";

const fakeRegisterResponse = {
    data : {
        user:{
            id:'user-1',
            name:'test',
            email:'test@example.com',
            avatar:'https://generated-image-url.jpg'
        }
    }
}

const fakeDataUser = {
    name:'test',
    email:'test@example.com',
    password:'password'
}

const fakeErrorResponse = new Error ('Ups, something went wrong');
describe('asyncRegisterUser thunk', () => { 
    beforeEach(() => {
        API._register = API.register;
    });
    
    afterEach(() =>{
        API._register = API.register;
        delete API._register;
    });

    it('should dispatch action correctly when data fetching success', async () =>{
        API.register = () => Promise.resolve(fakeRegisterResponse);
        const dispatch = jest.fn();
        API.register = jest.fn();
        await asyncRegisterUser(fakeDataUser)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(API.register).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    })

    it('should dispatch action and call alert correctly when data fetching failed', async()=>{
        API.register = () => Promise.reject(fakeErrorResponse);
        const dispatch = jest.fn();
        window.alert = jest.fn();
        await asyncRegisterUser(fakeDataUser)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
    })
 });

