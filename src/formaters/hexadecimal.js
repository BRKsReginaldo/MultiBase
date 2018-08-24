import {
  BASE_2,
  BASE_8,
  BASE_10,
  BASE_16,
  generateTitle,
  textify,
  generateBins,
  groupify,
  generateHexadecimals
} from './bases'
import {expressify} from './octal'
import binary from './binary'

export default {
  [BASE_2] (value) {
    let payload = []
    let binaryValues = generateBins(16)

    payload.push(generateTitle(value, 16, 'binário'))

    let textifiedValue = textify(value)
    payload.push(textifiedValue.map(digit => `${groupify(binaryValues[parseInt(digit, 16)], 4)} = ${expressify(groupify(binaryValues[parseInt(digit, 16)], 4))} = ${digit}`).join('<br/>'))
    payload.push(`(${value})<sub>16</sub> = (` + textifiedValue.map((digit, i) => `${groupify(binaryValues[parseInt(digit, 16)], 4)}`).join(' ') + ')<sub>2</sub>')

    return payload
  },
  [BASE_8] (value) {
    let payload = []

    payload.push(generateTitle(value, 16, 'octal'))
    payload.push('<br/>')
    payload = [...payload, ...this[BASE_2](value)]
    payload.push('<br/>')
    payload = [...payload, ...binary[BASE_8](parseInt(value, 16).toString(2))]
    payload.push('<br/>')
    payload.push(`(${value})<sub>16</sub> = (${parseInt(value, 16).toString(8)})<sub>8</sub>`)

    return payload
  },
  [BASE_10] (value) {
    const payload = []
    const hexadecimalValues = generateHexadecimals(16)

    payload.push(`Conversão do número (${value})<sub>16</sub> em decimal`)

    let textifiedValue = textify(value)

    payload.push(textifiedValue.reverse().map((digit, i) => `${digit} = ${parseInt(digit, 16)} = ${parseInt(digit, 16)}x16<sup>${i}</sup> = ${parseInt(digit, 16) * hexadecimalValues[i]}`).join('<br/>'))
    payload.push(textifiedValue.map((digit, i) => `${parseInt(digit, 16) * hexadecimalValues[i]}`).join(' + ') + ` = ${parseInt(value, 16).toString(10)}`)
    payload.push(`(${value})<sub>16</sub> = (${parseInt(value, 16).toString(10)})<sub>10</sub>`)

    return payload
  },
  [BASE_16] (value) {
    return value
  }
}
