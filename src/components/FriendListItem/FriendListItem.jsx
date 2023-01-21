import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const Friend = ({ avatar, name, isOnline }) => (
  <Item>
    <Status isOnline={isOnline}>{isOnline}</Status>
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
