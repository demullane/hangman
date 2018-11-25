import styled from 'styled-components';

const Key = styled.button`
  color: grey;
  font-weight: 600;
  font-size: 15px;
  width: 30px;
  height: 30px;
  border: 2px solid grey;
  padding: 5px;
  margin: 5px;
  outline: none;
  background-color: ${({isSelected}) => isSelected ? 'red' : 'none'};

  &:hover {
    cursor: ${({ isSelected }) => isSelected ? 'not-allowed' : 'pointer'};;
    color: ${({ isSelected }) => isSelected ? 'grey' : 'white'};;
    background-color: ${({ isSelected }) => isSelected ? 'red' : 'lightgrey'};;
  }
`;

const KeyboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 300px;
`;

export {
  Key,
  KeyboardContainer,
};