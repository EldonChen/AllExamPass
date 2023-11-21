import QuestionContent from "@/Entries/QuestionEntries/QuestionContent";

interface SingleChoice extends QuestionContent{
  options: string[];
  [property: string]: any;
}

export default SingleChoice