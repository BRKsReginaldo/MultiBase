import {generateBins, groupify, textify, generateOctals, BASE_2, BASE_8, BASE_10, BASE_16, generateTitle} from './bases'
import binary from './binary'

export const expressify = (number, base = 2) => {
  let payload = number.split('').reverse().map((digit, i) => `${digit}x${base}<sup>${i}</sup>`).reverse().join(' + ')

  payload += ' = '

  payload += number.split('').reverse().map((digit, i) => `${digit * Math.pow(base, i)}`).reverse().join(' + ')

  return payload
}

const octalFormater = {
  [BASE_2](value) {
    const binaryValues = generateBins(8)
    const payload = []

    payload.push(generateTitle(value, 8, 'binário'))

    let textifiedValue = textify(value)

    payload.push(textifiedValue.map((digit) => `${groupify(binaryValues[digit], 3)} = ${expressify(groupify(binaryValues[digit], 3))} = ${digit}`).join('<br/>'))
    payload.push(`(${value})<sub>8</sub> = (` + textifiedValue.map((digit, i) => `${groupify(binaryValues[digit], 3)}`).join(' ') + ')<sub>2</sub>')

    return payload
  },
  [BASE_8](value) {
    return value
  },
  [BASE_10](value) {
    const payload = []
    const octalValues = generateOctals(7)

    payload.push(`Conversão do número (${value})<sub>8</sub> em decimal`)

    let textifiedValue = textify(value)

    payload.push(textifiedValue.reverse().map((digit, i) => `${digit} = ${digit}x8<sup>${i}</sup> = ${digit * octalValues[i]}`).join('<br/>'))
    payload.push(textifiedValue.map((digit, i) => `${digit * octalValues[i]}`).join(' + ') + ` = ${parseInt(value, 8).toString(10)}`)
    payload.push(`(${value})<sub>8</sub> = (${parseInt(value, 8).toString(10)})<sub>10</sub>`)

    return payload
  },
  [BASE_16](value) {
    let payload = []

    payload = [...this[BASE_2](value)]
    payload.push('<br/>')
    payload = [...payload, ...binary[BASE_16](parseInt(value, 8).toString(2))]
    payload.push('</br>')
    payload.push(`(${value})<sub>8</sub> = (${parseInt(value, 8).toString(16)})<sub>16</sub>`)

    return payload
  }
}

window.octalFormater = octalFormater

export default octalFormater
