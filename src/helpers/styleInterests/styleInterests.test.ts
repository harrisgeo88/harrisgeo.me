import { styleInterests } from './styleInterests'

describe('Given a `styleInterests` util', () => {
  describe('when it is called with "i love x" input', () => {
    it('should return "x" in bold', () => {
      expect(styleInterests('I love x')).toBe("I love <b>x</b>")
    })
  })
  describe('when it is called without "i love x" input', () => {
    it('should return the argument as is', () => {
      expect(styleInterests('I am an astronaut')).toBe("I am an astronaut")
    })
  })
  describe('when it is called with empty input', () => {
    it('should return the argument as is', () => {
      expect(styleInterests('')).toBe("")
    })
  })
})