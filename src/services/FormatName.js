export function formatName(name) {
  return name.split('_').map(str=>str[0].toUpperCase() + str.slice(1,str.length)).join(' ')
}
