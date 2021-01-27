export const OPEN_SIDEBAR = "OPEN SIDEBAR"
export const SET_LOADING = "SET LOADING"

export const initialState = { open: false, loading: false }

export function globalReducer(state, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      console.log("action.type :>> ", action.type)
      return { open: !state.open }
    case SET_LOADING:
      return { open: !state.loading }
  }
}
