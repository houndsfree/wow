export enum EmailType {
  DEFAULT = 'default',
  AUTHENTICATION_WELCOME = 'authentication.welcome.password',
  AUTHENTICATION_FORGOT_PASSWORD = 'authentication.forgot.password',
  AUTHORIZATION_VERIFICATION_CODE = 'authorization.verification.code',
  AUTHORIZATION_INVITATION = 'authorization.invitation',
}

export const EmailSender = {
  default: {
    email: 'no-reply@marblism.com',
    name: 'Marblism',
  },
}
