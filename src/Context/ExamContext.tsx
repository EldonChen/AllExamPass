import {createContext} from "react";
import {ExamQuestion} from "@/Entries/ExamPageRes";

interface IExamContext {
  selectedQuestion: number,
  examQuestions: ExamQuestion[],
  handleSelectedChanged:Function,
}

export const ExamContext = createContext({} as IExamContext)