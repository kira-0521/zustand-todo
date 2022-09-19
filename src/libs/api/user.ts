import { LoginResponse } from '../../@types/api/user'
import { apiInstance } from './axios'
import { ERROR_CODES } from './error'
import { isEmpty } from 'lodash'

export const login = async (email: string): Promise<LoginResponse> => {
  try {
    const { data } = await apiInstance.get('users', {
      params: {
        email,
      },
    })
    if (isEmpty(data)) {
      return {
        code: ERROR_CODES.NOT_EXISTS_USER.code,
        message: ERROR_CODES.NOT_EXISTS_USER.message,
        user: data,
      }
    }
    return {
      code: ERROR_CODES.NO_ERROR.code,
      message: ERROR_CODES.NO_ERROR.message,
      user: data,
    }
  } catch (error: any) {
    const user = {
      id: 0,
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    }
    if (error.code === 400) {
      return {
        code: ERROR_CODES.BAD_REQUEST.code,
        message: ERROR_CODES.BAD_REQUEST.message,
        user: [user],
      }
    }
    return {
      code: ERROR_CODES.INTERNAL_SERVER_ERROR.code,
      message: ERROR_CODES.INTERNAL_SERVER_ERROR.message,
      user: [user],
    }
  }
}
