export const ERROR_CODES = {
  NO_ERROR: {
    code: 1000,
    message: '',
  },
  NOT_EXISTS_USER: {
    code: 3000,
    message: 'ユーザーが存在しません。',
  },
  BAD_REQUEST: {
    code: 4000,
    message: '不正なリクエストです。もう一度やり直してください。',
  },
  INTERNAL_SERVER_ERROR: {
    code: 5000,
    message:
      'サーバー内部で何らかのエラーが発生しました。ページを再読み込みしてください。',
  },
}
