import PropTypes from 'prop-types';
import {
  StatWrapper,
  Title,
  List,
  Item,
  Value,
  Label,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatWrapper>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Label>{label}</Label>
            <Value>{percentage}</Value>
          </Item>
        ))}
      </List>
    </StatWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
