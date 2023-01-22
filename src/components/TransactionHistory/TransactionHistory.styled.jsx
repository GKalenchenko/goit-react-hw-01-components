import styled from '@emotion/styled';

export const Table = styled.table`
  border-spacing: 0;
  padding-left: 25px;
  padding-top: 25px;
`;

export const Params = styled.th`
  width: 180px;
  height: auto;
  padding: 15px 15px;

  font-size: 12px;
  line-height: 1.3;
  font-weight: 600;
  text-transform: uppercase;

  border: 1px solid #ffff00;
  border-radius: 2px;
  background-color: #0e25a5;
  color: #ffff;
`;

export const Transaction = styled.td`
  font-size: 10px;
  line-height: 1.3;
  font-weight: 500;

  text-transform: capitalize;
  text-align: center;

  border: 1px outset #5f56db;
  border-radius: 2px;

  background-color: ${({ type }) => {
    let color = null;
    switch (type) {
      case 'withdrawal':
        color = '#FA5F55';
        break;
      case 'deposit':
        color = '#50C878';
        break;
      default:
        color = 'white';
        break;
    }
    return color;
  }};
`;
