export function changeQuery(e) {
  return {
    type: 'CHANGE_QUERY',
    payload: {
      query: e.target.value.trim()
    }
  }
}

export function search() {
  // redux-thunk middleware
  return (dispatch, getState) => dispatch({
    type: 'SEARCH_ASYNC',
    query: getState().home.table.query
  })
}

const initialState = {
  articles: [],
  query: '',
  loading: false,
  error: false
}

export default function articles(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_QUERY': {
      return {...state, query: action.payload.query,};
    }
    
    case 'LOAD_ARTICLES': {
      return {...state, loading: true, error: false,};
    }
    
    case 'LOAD_ARTICLES_SUCCESS': {
      return {...state, articles: action.payload, loading: false, error: false,};
    }
    
    case 'LOAD_ARTICLES_ERROR': {
      return {...state, loading: false, error: true,};
    }
    
    default:
      
      return state;
    
  }
}
