import styled from '@emotion/styled';

export const Item = styled.li`
  /* background-color: crimson; */
`;

export const Status = styled.span`
  background-color: ${props => {
    if (props.isOnline) return 'green';

    return 'red';
  }};
`;

export const Avatar = styled.img`
  /* background-color: darkkhaki; */
`;

export const Name = styled.p`
  /* background-color: #0c0cb4; */
`;
