import styled from 'styled-components';

// Forms, inputs, buttons

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;


export const Label = styled.label`
    display: inline-block;
    text-align:left;
    margin-bottom: .5rem;
    `;