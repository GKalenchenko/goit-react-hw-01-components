import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;

  width: 200px;
  padding: 4px;
  height: max-content;

  :not(:last-child) {
    margin-bottom: 7px;
  }

  border: solid 1px
    ${({ isOnline }) => {
      if (isOnline) return '#355E3B';

      return '#880808';
    }};

  background-color: #f5f5f5;
  border-radius: 2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Status = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 70%;
  margin-right: 5px;
  background-color: ${({ isOnline }) => {
    if (isOnline) return '#228B22';

    return '#FF0000';
  }};
`;

export const Avatar = styled.img``;

export const Name = styled.p`
  font-size: 15px;
  line-height: 1.7;
  font-weight: 600;

  margin-left: 15px;
`;
