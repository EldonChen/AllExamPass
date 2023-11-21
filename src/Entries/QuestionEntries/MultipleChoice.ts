import QuestionContent from "@/Entries/QuestionEntries/QuestionContent";

export default interface MultipleChoice extends QuestionContent{
  maxSelectableNum?: number;
  options: string[];
  [property: string]: any;
}
