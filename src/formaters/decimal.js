import {BASE_2, BASE_16, BASE_10, BASE_8, generateTitle} from './bases'

export default {
  [BASE_2] (value) {
    let payload = []

    payload.push(generateTitle(value, 10, 'binário'))

    Array(Math.round(Math.log(value) / Math.log(2))).fill(null).reduce((carry, item, i) => {
      payload.push(`${carry.lastDivider} / 2 = ${carry.lastValue}<br/>${carry.lastDivider} % 2 = <span class="red--text">${carry.lastRemainder}</span></br>Binário: <span class="red--text">${carry.lastBinary[0]}</span>${carry.lastBinary.slice(1)}</br></br>`)

      carry.lastDivider = carry.lastValue
      carry.lastRemainder = carry.lastValue % 2
      carry.lastBinary = carry.lastRemainder + carry.lastBinary
      carry.lastValue = Math.floor(carry.lastValue / 2)

      return carry
    }, {
      lastValue: Math.floor(value / 2),
      lastRemainder: value % 2,
      lastDivider: parseInt(value),
      lastBinary: (value % 2).toString()
    })

    payload.push(`(${value})<sub>10</sub> = (${parseInt(value, 10).toString(2)})<sub>2</sub>`)

    return payload
  },
  [BASE_8] (value) {
    let payload = []

    payload.push(generateTitle(value, 10, 'octal'))

    Array(Math.round(Math.log(value) / Math.log(7))).fill(null).reduce((carry, item, i) => {
      payload.push(`${carry.lastDivider} / 8 = ${carry.lastValue}<br/>${carry.lastDivider} % 8 = <span class="red--text">${carry.lastRemainder}</span></br>Hexadecimal: <span class="red--text">${carry.lastHexadecimal[0]}</span>${carry.lastHexadecimal.slice(1)}</br></br>`)

      carry.lastDivider = carry.lastValue
      carry.lastRemainder = carry.lastValue % 8
      carry.lastHexadecimal = carry.lastRemainder + carry.lastHexadecimal
      carry.lastValue = Math.floor(carry.lastValue / 8)

      return carry
    }, {
      lastValue: Math.floor(value / 8),
      lastRemainder: value % 8,
      lastDivider: parseInt(value),
      lastHexadecimal: (value % 8).toString()
    })

    payload.push(`(${value})<sub>10</sub> = (${parseInt(value, 10).toString(8)})<sub>8</sub>`)

    return payload
  },
  [BASE_10] (value) {
    return value
  },
  [BASE_16] (value) {
    let payload = []

    payload.push(generateTitle(value, 10, 'octal'))

    Array(Math.round(Math.log(value) / Math.log(15))).fill(null).reduce((carry, item, i) => {
      payload.push(`${carry.lastDivider} / 16 = ${carry.lastValue}<br/>${carry.lastDivider} % 16 = ${carry.lastRemainder} = ${parseInt(carry.lastRemainder, 10).toString(16)}</br>Hexadecimal: ${carry.lastHexadecimal}</br></br>`)

      carry.lastDivider = carry.lastValue
      carry.lastRemainder = carry.lastValue % 16
      carry.lastHexadecimal = parseInt(carry.lastRemainder, 10).toString(16) + carry.lastHexadecimal
      carry.lastValue = Math.floor(carry.lastValue / 16)

      return carry
    }, {
      lastValue: Math.floor(value / 16),
      lastRemainder: value % 16,
      lastDivider: parseInt(value),
      lastHexadecimal: (value % 16).toString(16)
    })

    payload.push(`(${value})<sub>10</sub> = (${parseInt(value, 10).toString(16)})<sub>16</sub>`)

    return payload
  }
}
