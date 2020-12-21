const iLove = 'I love '

export const styleInterests = (interest: string): string => {
  if (!interest || !interest.includes(iLove)) return interest

  const [_, x] = interest.split(iLove)
  return `${iLove}<b>${x}</b>`
}