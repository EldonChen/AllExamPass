export interface ExamQuestion {
  index: number,
  questionId: string,
  questionIndex: string,
  userAnswer: string | null,
  isMarked: boolean,
  isAnswered: boolean,
}