import {generateBins, generateTitle, textify, groupify, BASE_2, BASE_8, BASE_10, BASE_16} from './bases'
import {chunk} from 'lodash'
import {expressify} from "./octal"

export const expressifyHexadecimal = (number, base = 2) => {
  let payload = parseInt(number, 16).toString(2).split('').reverse().map((digit, i) => `${digit}x${base}<sup>${i}</sup>`).reverse().join(' + ')

  payload += ' = '

  payload += parseInt(number, 16).toString(2).split('').reverse().map((digit, i) => `${digit * Math.pow(base, i)}`).reverse().join(' + ')

  return payload
}

export default {
  [BASE_2](value) {
    return value
  },
  [BASE_8](value) {
    const payload = []

    payload.push(generateTitle(value, 2, 'octal'))
    const octal = parseInt(value, 2).toString(8)
    const textifiedValue = textify(octal)
    payload.push(textifiedValue.reverse().map((digit, i) => `${groupify(parseInt(digit, 8).toString(2), 3)} = ${expressify(groupify(parseInt(digit, 8).toString(2), 3))} = ${digit}`).join('<br/>'))
    payload.push(`(${parseInt(value, 2).toString(8).split('').map(hex => groupify(parseInt(hex, 8).toString(2), 3)).join(' ')})<sub>2</sub> = (${parseInt(value, 2).toString(8)})<sub>8</sub>`)


    return payload
  },
  [BASE_10](value) {
    const payload = []

    payload.push(generateTitle(value, 2, 'decimal'))

    const textifiedValue = textify(value)
    payload.push(textifiedValue.reverse().map((digit, i) => `${digit}x2<sup>${i}</sup>`).reverse().join(' + ') + ' = x')
    payload.push(textifiedValue.map((digit, i) => `${digit}x${Math.pow(2, i)}`).reverse().join(' + ') + ' = x')
    payload.push(textifiedValue.map((digit, i) => `${digit * Math.pow(2, i)}`).reverse().join(' + ') + ' = ' + parseInt(value, 2).toString(10))
    payload.push(`(${value})<sub>2</sub> = (${parseInt(value, 2).toString(10)})<sub>10</sub>`)

    return payload
  },
  [BASE_16](value) {
    const payload = []

    payload.push(generateTitle(value, 2, 'hexadecimal'))

    payload.push(parseInt(value, 2).toString(16).split('').reverse().map((digit) => `${parseInt(digit, 16).toString(2)} = ${expressifyHexadecimal(digit)} = ${digit}`).join('<br/>'))
    payload.push(`(${parseInt(value, 2).toString(16).split('').map(hex => groupify(parseInt(hex, 16).toString(2), 4)).join(' ')})<sub>2</sub> = (${parseInt(value, 2).toString(16)})<sub>16</sub>`)

    return payload
  }

}
