export default {}

/**
 * 将对象转变为 params string
 * e.g. { name: 'user', age: 13} => name=user&age=13
 * @param obj
 * @return {*}
 */
export function obj2params(obj, prefix = '', suffix = '') {
  if (typeof obj !== 'object' || !obj) return ''

  let params = []
  Object.keys(obj).forEach(key => {
    if (obj[key] !== undefined && obj[key] !== null) {
      if (obj[key] instanceof Object) { // 数组和对象特殊处理
        params.push(`${key}=${JSON.stringify(obj[key])}`)
      } else {
        params.push(`${key}=${obj[key]}`)
      }
    }
  })
  return prefix + params.join('&') + suffix
}

/**
 *  下划线转驼峰
 * @param name
 */
export const underScoreToCamel = (name) =>
  name
    .split('_')
    .map((item, index) => {
      if (item.length > 0) {
        if (index === 0) {
          return item
        } else {
          return item[0].toUpperCase() + item.substring(1).toLowerCase()
        }
      } else {
        return ''
      }
    })
    .join('')

export const notEmpty = value => value !== null && value !== undefined && value !== ''
export const notNullOrUndefiend = value => value !== null && value !== undefined
