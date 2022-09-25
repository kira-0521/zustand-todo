import dayjs from './day'
import { isNil } from 'lodash'

export const viewLogger = (first: any | string, second: any = undefined) => {
  const now = dayjs()
  if (isNil(second)) {
    console.log(`[ ${now} ] `, first)
    return
  }
  if (typeof first !== 'string') {
    console.log(`[ ${now} ] \n ${JSON.stringify(first)}`, second)
    return
  }
  console.log(`[ ${now} ] ${first}`, second)
}
