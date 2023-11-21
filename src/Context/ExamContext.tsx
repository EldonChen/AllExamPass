import {createContext} from "react";
import {ExamQuestion} from "@/Entries/ExamPageRes";

interface IExamContext {
  selectedQuestion: number,
  examQuestions: ExamQuestion[],
  handleSelectedChanged:Function,
  handleAnswer:Function
}

export const ExamContext = createContext({} as IExamContext)