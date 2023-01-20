import PropTypes from 'prop-types';
import {
  CardWrapper,
  DescriptionBlock,
  Avatar,
  Name,
  Nickname,
  Location,
  StatsList,
  StatLabel,
  StatValue,
} from './Profile.styled';

export const Profile = ({
  username,
  nickname,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
    <CardWrapper>
      <DescriptionBlock>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Nickname>@{nickname}</Nickname>
        <Location>{location}</Location>
      </DescriptionBlock>

      <StatsList>
        <li>
          <StatLabel>Followers</StatLabel>
          <StatValue>{followers}</StatValue>
        </li>
        <li>
          <StatLabel>Views</StatLabel>
          <StatValue>{views}</StatValue>
        </li>
        <li>
          <StatLabel>Likes</StatLabel>
          <StatValue>{likes}</StatValue>
        </li>
      </StatsList>
    </CardWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
