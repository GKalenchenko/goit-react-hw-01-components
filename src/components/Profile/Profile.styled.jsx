import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  padding: 8px;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  object-fit: contain;
  width: 100%;
  height: 150px;
`;

export const Name = styled.p`
  color: blue;
`;

export const Nickname = styled.p`
  color: tomato;
`;

export const Location = styled.p`
  color: #ff47d1;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatLabel = styled.span``;

export const StatValue = styled.span``;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90px;
  height: 50px;

  :not(:last-child) {
    margin-right: 12px;
  }
`;
