import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 30px;
`;

export const CardWrapper = styled.div`
  width: 300px;
  height: auto;
  padding: 15px 8px;

  margin-left: auto;
  margin-right: auto;

  border: 2px solid #eeeeee;
  background-color: #f8f8f863;
  border-radius: 3px;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-weight: 600;

  margin-bottom: 2px;

  color: #000000;
`;

export const Nickname = styled.p`
  font-size: 12px;
  font-weight: 400;

  margin-bottom: 2px;

  color: #282828;
`;

export const Location = styled.p`
  font-size: 12px;
  font-weight: 300;

  margin-bottom: 10px;
  color: #696969;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;

  border-radius: 4px;
  background-color: #f5f4fa;
`;

export const StatLabel = styled.span`
  font-size: 12px;
  font-weight: 300;
  color: #696969;
`;

export const StatValue = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.03em;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90px;
  height: 50px;

  :not(:last-child) {
    margin-right: 2px;
    border-right: 1px solid #eeeeee;
  }
`;
