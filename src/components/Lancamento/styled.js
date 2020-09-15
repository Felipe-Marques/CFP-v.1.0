import styled from 'styled-components';

//Styled-Components wrappers
export const WrapperTransactionContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* justify-content: flex-start; */
  padding: 5px;
  margin-bottom: 5px;
  padding-right: 20px;
  padding-left: 20px;
  border: 1px solid lightsteelblue;
  border-radius: 10px;
`;

WrapperTransactionContainer.index = styled.div`
  display: flex;
  /* flex-direction: column; */
  font-size: 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-style: oblique;
  margin-right: 20px;
`;

WrapperTransactionContainer.description = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

WrapperTransactionContainer.strong = styled.strong`
  font-size: large;
  font-style: italic;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bolder;
`;

WrapperTransactionContainer.buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

WrapperTransactionContainer.icons = styled.i`
  font-size: 24px;
  color: black;
  cursor: pointer;
`;
