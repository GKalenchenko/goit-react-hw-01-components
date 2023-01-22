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
  Item,
  Container,
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
    <Container>
      <CardWrapper>
        <DescriptionBlock>
          <Avatar src={avatar} alt="User avatar" />
          <Name>{username}</Name>
          <Nickname>@{nickname}</Nickname>
          <Location>{location}</Location>
        </DescriptionBlock>

        <StatsList>
          <Item>
            <StatLabel>Followers</StatLabel>
            <StatValue>{followers}</StatValue>
          </Item>
          <Item>
            <StatLabel>Views</StatLabel>
            <StatValue>{views}</StatValue>
          </Item>
          <Item>
            <StatLabel>Likes</StatLabel>
            <StatValue>{likes}</StatValue>
          </Item>
        </StatsList>
      </CardWrapper>
    </Container>
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
