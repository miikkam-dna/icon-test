const upperCamelCase = require('uppercamelcase')

const parseName = (name, defaultStyle) => {
  const cleanedName = name.replace(/\//g, '_') // Replace "/" with "_"
  const nameSlices = cleanedName.split('/')
  const iconName = nameSlices[nameSlices.length - 1]
  const style = iconName.split('-').pop()
  return {
    name,
    componentName: upperCamelCase(iconName),
    style: style === 'fill' || style === 'stroke' ? style : defaultStyle
  }
}

module.exports = {
  parseName
};
