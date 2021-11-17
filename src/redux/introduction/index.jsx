import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getIntroductionList, getIntroduction } from '@api/IntroductionApi';

const name = 'introduction';

const introductionList = {
  introductions: [],
  introduction: {},
  isLoading: false,
  Error: '',
};

export const fetchIntroductionList = createAsyncThunk(`${name}/fetchAllIntroduction`, async () => {
  const { data } = await getIntroductionList();
  return data;
});

export const fetchIntroduction = createAsyncThunk(`${name}/fetchIntroduction`, async (id) => {
  const { data } = await getIntroduction(id);
  return data;
});

export const introduction = createSlice({
  name,
  initialState: introductionList,
  reducers: {},
  extraReducers: {
    //   대기상태 = 로딩 세팅
    [fetchIntroductionList.pending]: (state) => {
      state.introductions = [];
      state.isLoading = true;
    },
    // 정상 = 결과 값 가져오기
    [fetchIntroductionList.fulfilled]: (state, action) => {
      state.introductions = action.payload;
      state.isLoading = false;
    },
    // 실패 = 오류 메세지
    [fetchIntroductionList.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [fetchIntroduction.pending]: (state) => {
      state.introduction = {};
      state.isLoading = true;
    },
    [fetchIntroduction.fulfilled]: (state, action) => {
      state.introduction = { ...action.payload };
      state.isLoading = false;
    },
    [fetchIntroduction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});
