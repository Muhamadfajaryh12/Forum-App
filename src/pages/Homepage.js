import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadList from '../components/ThreadList';
import AddButton from '../components/AddButton';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

function HomePage() {
  const { threads = [], users = [], authUser } = useSelector((states) => states);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);
  console.log(users);
  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));
  console.log(threadList);    
  return (
    <>
      <div className="content-forum">
        <ThreadList threads={threadList} />
      </div>
      <AddButton />
    </>
  );
}
export default HomePage;
