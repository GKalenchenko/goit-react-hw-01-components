import styled from '@emotion/styled';

export const StatWrapper = styled.section`
  width: max-content;
  height: auto;
  padding: 4px 0px 0px 0px;

  margin-left: auto;
  margin-right: auto;

  border: 1px solid #e8e8e8;
  border-radius: 3px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;

  padding: 10px 10px;

  margin-bottom: 8px;

  text-align: center;
  color: #282828;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;

  :first-child {
    border-bottom-left-radius: 3px;
  }
  :last-child {
    border-bottom-right-radius: 3px;
  }

  background-color: ${({ type }) => {
    let color = null;
    switch (type) {
      case '.docx':
        color = '#1e0ea7';
        break;
      case '.pdf':
        color = '#a71c09';
        break;
      case '.mp3':
        color = '#280b57';
        break;
      case '.psd':
        color = '#4e4699';
        break;

      default:
        throw new Error(`unsupported document format`);
    }
    return color;
  }};
  color: #ffffffd6;
`;

export const Label = styled.span`
  font-size: 10px;
  line-height: 1.3;
  font-weight: 400;

  margin-bottom: 2px;
`;
export const Value = styled.span``;
