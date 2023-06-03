import dayjs, { Dayjs } from "dayjs"

export const rules = {
  require: (message: string = "Required field") => ({
    required: true,
    message,
  }),
  isDateValid: (message: string) => () => ({
    validator(_: any, value: Dayjs) {
      if (value?.isAfter(dayjs())) {
        return Promise.resolve()
      }
      return Promise.reject(new Error(message))
    },
  }),
}
