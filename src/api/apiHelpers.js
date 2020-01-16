import isEmpty from 'lodash/isEmpty';

const buildHeaders = (accept = 'application/json') => {
  return new Headers({
    Accept: accept
  });
};

// A Helper function to automagically chain promises together with some nice checkResponse syntax to handle errors.
export const checkResponse = serviceComment => {
  return res => {
    if (res.ok) {
      if (res.status === 204) {
        return res;
      }

      const text = res.text();

      return text.then(value => {
        if (isEmpty(value)) {
          return res;
        }
        return JSON.parse(value);
      });
    }
    console.log('res ', res);
    throw new Error(`Error fetching ${serviceComment}`, res);
  };
};

export const buildOptions = (method = 'GET', body, ignoreCache = false) => {
  const headers = buildHeaders('application/json');

  if (['POST', 'PUT', 'PATCH', 'DELETE'].indexOf(method.toUpperCase()) !== -1) {
    headers.append('Content-Type', 'application/json');
  }

  const options = {
    method,
    mode: 'cors',
    headers,
    body
  };

  if (ignoreCache) {
    options.cache = 'no-store';
  }
  return options;
};

export const fetchRequest = (endpoint, buildoption) => {
  return fetch(endpoint, buildoption());
};
