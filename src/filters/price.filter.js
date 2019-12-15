export default function (price) {
  if (!price) return ''
  return `$ ${price}`
}