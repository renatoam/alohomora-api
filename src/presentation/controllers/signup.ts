export class SignUpController {
  handleRequest(request: any): any {
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}
