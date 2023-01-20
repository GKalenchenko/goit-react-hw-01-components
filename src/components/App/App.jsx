import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import { Profile } from '../Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {
  return (
    <>
      {/* <Profile
        username={user.username}
        nickname={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      /> */}
      {/* <Statistics title="Upload stats" stats={data}></Statistics> */}
      <FriendList friends={friends} />
    </>
  );
};