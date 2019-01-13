import { UNSPLASH_ACCESS_KEY } from './secret';

export const Api='https://jsonplaceholder.typicode.com/todos/1';

const BASE_URL = 'https://api.unsplash.com'
export const GET_SEARCH_RESULT = 'GET_SEARCH_RESULT'
export const GET_SEARCH_RESULT_SUCCESS = 'GET_SEARCH_RESULT_SUCCESS'
export const GET_SEARCH_RESULT_ERROR = 'GET_SEARCH_RESULT_ERROR'
export const EMPTY_STORE = 'EMPTY_STORE'
export const IMAGE_URL_PREFIX = `${BASE_URL}/search/photos?page=1&client_id=${UNSPLASH_ACCESS_KEY}&query=`
export const IMAGE_URL_SUFFIX = '&orientation=landscape&per_page=6&page='
