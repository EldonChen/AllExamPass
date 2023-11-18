import {createSlice} from "@reduxjs/toolkit";
import {ExamPageInfo, QuestionType} from "@/Entries/ExamRoomRes";

interface Question {
  questionId: string,
  index: string | number,
  questionType: QuestionType,
  hasChild: boolean,
  Children?: Question[]
}

interface ExamQuestions {
  examId: string,
  questions: Question[]
}

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
    setExamQuestions(
      state,
      action: {
        payload: ExamQuestions,
        type: string
      }
    ) {
      // if (!state.questionMap.has(action.payload.examId)) {
      //   state.questionMap.set(action.payload.examId, action.payload.questions)
      // }
    }
  },
})

const {
  setExamRoomId,
  setExamInfos,
  setExamQuestions,
  setExamRoomDirection
} = examStore.actions;
const examReducer = examStore.reducer;

export { setExamRoomId, setExamRoomDirection, setExamInfos, setExamQuestions }
export default examReducer
