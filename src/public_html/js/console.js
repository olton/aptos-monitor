
const log = (...rest) => console.log(datetime().format(dateFormat.full), ...rest)
const info = (...rest) => console.info(datetime().format(dateFormat.full), ...rest)
const error = (...rest) => console.error(datetime().format(dateFormat.full), ...rest)