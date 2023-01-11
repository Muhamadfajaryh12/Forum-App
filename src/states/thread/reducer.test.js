import ThreadsReducer from "./reducer";
describe('ThreadsReducer function', () => {
    it('should return the initial state when given by unknown action', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN' };
    
        const nextState = ThreadsReducer(initialState, action);
        expect(nextState).toBe(initialState);
      });

    it('should return the threads when given by threads/receive action', () => {
        const initialState = [];
        const action = {
            type:'RECEIVE_THREADS',
            payload:{
                threads:[
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
                      {
                        id: 'thread-2',
                        title: 'Thread Kedua',
                        body: 'Ini adalah thread kedua',
                        category: 'General',
                        createdAt: '2021-06-21T07:00:00.000Z',
                        ownerId: 'users-2',
                        upVotesBy: [],
                        downVotesBy: [],
                        totalComments: 0,
                      },
                ]
            }   
        }
        const nextState = ThreadsReducer(initialState, action);

        expect(nextState).toEqual(action.payload.threads);
    });
    it('should return the threads with the new thread when given by ADD_THREAD action', () => {
        const initialState = [
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
            }
          ];    
       
          const action = {
            type: 'ADD_THREADS',
            payload: {
                thread: {
                  id: 'thread-new',
                  title: 'Thread Baru',
                  body: 'Ini adalah thread yg baru',
                  category: 'General',
                  createdAt: '2021-06-21T07:00:00.000Z',
                  ownerId: 'users-neww',
                  upVotesBy: [],
                  downVotesBy: [],
                  totalComments: 0,
                },
          }
        }
        const nextState = ThreadsReducer(initialState, action);
        expect(nextState).toStrictEqual([action.payload.thread, ...initialState]);
      });
    
    
    });