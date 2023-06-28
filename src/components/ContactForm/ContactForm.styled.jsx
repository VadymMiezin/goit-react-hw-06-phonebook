import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  color: #000000;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 5px;
  outline: none;
`;

export const Btn = styled.button`
  background-color: #8bc34a;
  color: #ffffff;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms;
  :hover,
  :focus {
    background-color: #45a049;
  }
`;
