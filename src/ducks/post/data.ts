import { createAsyncThunk, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { postman } from "../../utils/postman";
import { TYPE_API } from "../../constants/general";

const initialState = {
  data: {},
  currentPage: 1,
  loading: false,
}

const postAdapter = createEntityAdapter();

export const getPostDataRequest = createAsyncThunk(
  'getPostDataRequest',
  async (page, { rejectWithValue }) => {
    try {
      return await postman.get(`${TYPE_API.POST}?page=${page}`);
    } catch (e) {
      return rejectWithValue(e);
    }
  }
)

export const postSlice = createSlice({
  name: 'postSlice',
  initialState: postAdapter.getInitialState(initialState),
  reducers: {
    updateCurrentPage: (state, { payload }) => {
      state.currentPage = payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getPostDataRequest.pending, state => {
        state.loading = true;
      })
      .addCase(getPostDataRequest.fulfilled, (state,{ payload }) => {
        state.data = payload;
        state.loading = false;
      })
      .addCase(getPostDataRequest.rejected, state => {
        state.loading = false;
      })
    }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stateSelector = (state: any) => state.post
export const postDataSelector = createSelector(stateSelector, state => state.data)
export const postLoadingSelector = createSelector(stateSelector, state => state.loading)
export const postCurrentPageSelector = createSelector(stateSelector, state => state.currentPage)

const { reducer, actions } = postSlice;

export const { updateCurrentPage } = actions;

export default reducer;