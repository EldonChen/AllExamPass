import QuestionContent from "@/Entries/QuestionEntries/QuestionContent";

interface Question {
  questionContent: QuestionContent;
  questionIndex: string;
  questionPointValue: string;
  questionStem: string;
  [property: string]: any;
}

export default Question