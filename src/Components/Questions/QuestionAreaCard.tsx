import React, {useContext} from "react";
import {Tag} from "antd";
import Question from "@/Entries/QuestionEntries/Question";
import QuestionContent from "@/Entries/QuestionEntries/QuestionContent";
import QUESTION_TYPE from "@/Entries/Code/QUESTION_TYPE";
import QuestionSingleChoice from "@/Components/Questions/QuestionSingleChoice";
import {ExamContext} from "@/Context/ExamContext";


const getQuestionContent = (questionContent:QuestionContent): React.JSX.Element => {
  if(questionContent.questionTypeId === QUESTION_TYPE.SINGLE_CHOICE){
    // @ts-ignore
    return <QuestionSingleChoice>{questionContent}</QuestionSingleChoice>
  }
  else{
    return <></>
  }
}
// @ts-ignore
const QuestionAreaCard = ({children}: {children: Question[]}):React.JSX.Element=> {

  let questionCardContent = children.map((question, index) => {
    let questionContent = getQuestionContent(question.questionContent);
    return (
      <div key={index}>
        <div>
          <b>{question.questionIndex}</b>. <Tag>{question.questionContent.questionTypeName}</Tag>(本题{question.questionPointValue}分)
        </div>
        <div>{questionContent}</div>
      </div>
    )
  })
  return (
    <div>
      {questionCardContent}

    </div>
  )
}

export default QuestionAreaCard;