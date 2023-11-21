import {createSlice} from "@reduxjs/toolkit";
import {ExamPageInfo} from "@/Entries/ExamRoomRes";

const examStore = createSlice({
  name: 'exam',
  initialState: {
    examRoomId: '',
    examRoomDirection: '',
    examInfos: [] as ExamPageInfo[],
    // questionMap: new Map(),
  },
  reducers: {
    setExamRoomId(
      state,
      action
    ) {
      state.examRoomId = action.payload;
    },
    setExamRoomDirection(
      state,
      action
    ) {
      state.examRoomDirection = action.payload;
    },
    setExamInfos(
      state,
      action: {payload: ExamPageInfo[], type: string}
    ) {
      state.examInfos = action.payload;
    },
  },
})

const {
  setExamRoomId,
  setExamInfos,
  setExamRoomDirection
} = examStore.actions;
const examReducer = examStore.reducer;

export { setExamRoomId, setExamRoomDirection, setExamInfos }
export default examReducer
