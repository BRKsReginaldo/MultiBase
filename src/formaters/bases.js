export const
  BASE_2 = '2',
  BASE_8 = '8',
  BASE_10 = '10',
  BASE_16 = '16'

export const generateBins = bins => Array(bins).fill(null).map((a, i) => i.toString(2))

export const groupify = (value, groupSize) => {
  const payload = [...value.toString().split('')]

  while (groupSize > payload.length) payload.unshift(0)

  return payload.join('')
}

export const textify = number => number.toString().split('')

export const generateOctals = octals => Array(octals).fill(null).map((a, i) => Math.pow(8, i))
export const generateHexadecimals = octals => Array(octals).fill(null).map((a, i) => Math.pow(16, i))

export const generateTitle = (number, base, baseName) => `Conversão do número (${number})<sub>${base}</sub> em ${baseName}`
