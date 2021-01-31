// TODO should be inside env file
const BASE_URL = 'https://api.github.com/search';

function _partial(fn: Function, ...args) {
  return (...rest) => {
    return fn.apply(this, args.concat(rest));
  };
}

const _getEndpoint = (
  baseUrl: string,
  resource: string,
  id: string
): string => {
  return `${baseUrl}/${resource}${id ? '/' + id : ''}`;
};

export const getEndpoint = _partial(_getEndpoint, BASE_URL);
