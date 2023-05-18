import { INVALID_CREDENTIALS_ERROR } from '../constants/error.constants';

const createErrorDisplay = (message: string) => {
  switch (message) {
    case INVALID_CREDENTIALS_ERROR:
      return 'Username or password invalid.';
    default:
      return 'Sorry, an error occurred.';
  }
};

export { createErrorDisplay };
