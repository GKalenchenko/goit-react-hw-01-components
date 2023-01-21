import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
`;

export const Status = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 70%;
  margin-right: 5px;
  background-color: ${props => {
    if (props.isOnline) return 'green';

    return 'red';
  }};
`;

export const Avatar = styled.img`
  /* background-color: darkkhaki; */
`;

export const Name = styled.p`
  margin-left: 15px;
`;
