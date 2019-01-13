import { GET_SEARCH_RESULT, GET_SEARCH_RESULT_SUCCESS, GET_SEARCH_RESULT_ERROR, IMAGE_URL_PREFIX, IMAGE_URL_SUFFIX } from '../constants';

const getSearchResultsData = () => {
  return{
    type: GET_SEARCH_RESULT
  }
}

const getSearchResultsDataValue = (data, query) => {
  var formattedData = [];
  data.forEach(element => {
    formattedData.push(element.urls.regular);
  });
  return{
    type: GET_SEARCH_RESULT_SUCCESS,
    data: formattedData,
    query: query
  }
}

const getSearchResultsDataFailure = () => {
  return{
    type: GET_SEARCH_RESULT_ERROR
  }
}


const getSearchResultsFromAPI = (query, page=1) => {
    const apiUrl = `${IMAGE_URL_PREFIX}${query}${IMAGE_URL_SUFFIX}${page}`;
  return(dispatch) => {
    dispatch(getSearchResultsData())
    fetch(apiUrl, { 
      method: 'get'
      }).then((response) =>{ if(response.status==200){return response.json();}else return [];})
      .then((responseJson) => {
        dispatch(getSearchResultsDataValue(responseJson.results, query));
      })
      .catch((error) => {
        dispatch(getSearchResultsDataFailure());
      });
  }
}

export default getSearchResultsFromAPI;