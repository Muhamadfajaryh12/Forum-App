import API from "../../data/api";
import { asyncPopulateUsersAndThreads } from './action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { receiveThreadsActionCreator } from '../thread/action';
import { receiveUsersActionCreator } from '../users/action';
const fakeThreadsResponse = [
    {
        id: 'thread-1',
        title: 'Thread Pertama',
        body: 'Ini adalah thread pertama',
        category: 'General',
        createdAt: '2021-06-21T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
]
const  fakeUsersResponse = [
         {
          id: 'john_doe',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
]
const fakeErrorResponse = new Error('Ups, something went wrong');   
describe('asyncPopulateUsersAndThreads thunk', () => {
    beforeEach(() => {
        API._getAllUsers =API.getAllUsers;
        API._getAllThreads =API.getAllThreads;
    })
    afterEach(() => {
        API.getAllUsers = API._getAllUsers;
        API.getAllThreads = API._getAllThreads;
     
        delete API._getAllUsers;
        delete API._getAllThreads;
      });
      it('should dispatch action correctly when data fetching success', async () => {
        // arrange
        API.getAllUsers = () => Promise.resolve(fakeUsersResponse);
        API.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
        const dispatch = jest.fn();
        // action
        await asyncPopulateUsersAndThreads()(dispatch)
        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
        expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
      });
      it('should dispatch action and call alert correctly when data fetching failed', async () => {
        // arrange
        API.getAllUsers = () => Promise.reject(fakeErrorResponse);
        API.getAllThreads = () => Promise.reject(fakeErrorResponse);
        // mock dispatch
        const dispatch = jest.fn();
        window.alert = jest.fn();
        // action
        await asyncPopulateUsersAndThreads()(dispatch);
        // assert
        expect(dispatch).toHaveBeenCalledWith(showLoading());
        expect(dispatch).toHaveBeenCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
      });
});