import { getMessage } from "./index"

describe('getMessage()', () => {
  it('should return the correct message when called', () => {
    expect(getMessage()).toBe('Hello world by Ahsan!');
  })

  it('should be super smart', () => {
    expect(true).toBe(true);
  })
})