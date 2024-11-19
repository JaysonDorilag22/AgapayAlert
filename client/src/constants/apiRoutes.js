// apiRoutes.js

const BASE_URL = import.meta.env.VITE_LOCAL_HOST;

console.log('BASE_URL:', BASE_URL);
const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const PATHS = {
  AUTH: {
    BASE: '/api/auth',
    CREATE: '/signup',
    LOGIN: '/login',
    LOGOUT: '/logout',
    VERIFY: '/verify',
    RESEND: '/resend-verification',
    FORGOT_PASSWORD: '/request-password-reset',
    RESET_PASSWORD: '/reset-password',
  },
  USER: {
    BASE: '/api/users',
    CREATE: '/',
    LOGIN: '/login',
    LOGOUT: '/logout',
    VERIFY: '/verify',
    RESEND: '/resend-verification',
    FORGOT_PASSWORD: '/request-password-reset',
    RESET_PASSWORD: '/reset-password',
    READ_ALL_PAGINATION: '/?page=1&pageSize=10',
    READ_ONE: '/:id',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
  FEEDBACK: {
    BASE: '/api/feedbacks',
    CREATE: '/',
    READ_ALL: '/',
    READ_ONE: '/:id',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
  REPORT: {
    BASE: '/api/reports',
    CREATE: '/create',
    READ_ALL: '/getall',
    READ_ONE: '/:id',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
  NOTIFICATION: {
    BASE: '/api/notifications',
    CREATE: '/',
    READ_ALL: '/',
    READ_ONE: '/:id',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
  COMMENT: {
    BASE: '/api/comments',
    CREATE: '/',
    READ_ALL: '/',
    READ_ONE: '/:id',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
  ALPR: {
    BASE: '/api/alprs',
    CREATE: '/',
    READ_ALL: '/',
    READ_ONE: '/:id',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
  CHAT: {
    BASE: '/api/chats',
    CREATE: '/',
    READ_ALL: '/',
    READ_ONE: '/:id',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
  MESSAGE: {
    BASE: '/api/messages',
    CREATE: '/',
    READ_ALL: '/',
    READ_ONE: '/:id',
    UPDATE: '/:id',
    DELETE: '/:id',
  },
};

export const getFullUrl = (path) => `http://localhost:5000${path}`;

export { PATHS, METHODS };