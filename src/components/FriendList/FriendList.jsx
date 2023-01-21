import { Friend } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List className="friend-list">
      {friends.map(friend => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
