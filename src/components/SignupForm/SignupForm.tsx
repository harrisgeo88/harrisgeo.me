import React from 'react'
import { Form, FormInput, Input, Label, Button } from './SignupForm.styles'
import { A, H3 } from '../Layout'
import { SignupFormProps } from './SignupForm.models'

export const SignupForm = ({ dark, copy: {
  title,
  quote,
  placeholder,
  subscribe,
} }: SignupFormProps) => {
  return (
    <Form
      action="https://tinyletter.com/harrisgeo88"
      method="post"
      target="popupwindow"
      onSubmit={() => {
        window.open('https://tinyletter.com/harrisgeo88', 'popupwindow', 'scrollbars=yes,width=800,height=600')
        return true
      }}>
      <H3>{title}</H3>
      <p>
        <Label htmlFor="tlemail">{quote}</Label>
      </p>
      <p>
        <FormInput type="text" name="email" id="tlemail" placeholder={placeholder} />
      </p>
      <Input type="hidden" value="1" name="embed" />
      <Button type="submit">{subscribe}</Button>
    </Form>
        
  )
}