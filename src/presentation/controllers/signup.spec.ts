import { SignUpController } from './signup'

describe('Sign Up Controller', () => {
  test('Should be 400 if no user name is provided', () => {
    // SUT: system under test
    const sut = new SignUpController()
    const request = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const response = sut.handleRequest(request)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new Error('Missing param: name'))
  })
})
