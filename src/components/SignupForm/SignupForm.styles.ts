import styled from 'styled-components'
import { tokens } from '../tokens'

export const Form = styled.form`
  border: 1px solid #ccc;
  padding: 30px 15px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .12);
`

export const Label = styled.label`
  font-family: "Merriweather";
  font-weight: 500;
`

export const Input = styled.input``

export const FormInput = styled(Input)`
  font-family: "Merriweather";
  width: 150px;
  padding: ${tokens.spacingS};
`

export const Button = styled.button`
  margin: 0;
  color: ${tokens.white};
  background-color: ${tokens.hover};
  height: 40px;
  padding: 0 22px;
  font-size: 14px;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  text-transform: uppercase;

  & :hover {
    opacity: 0.8;
  }
`
