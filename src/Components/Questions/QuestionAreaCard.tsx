import React from "react";
import {Space, Tag} from "antd";
import Question from "@/Entries/QuestionEntries/Question";
import QuestionContent from "@/Entries/QuestionEntries/QuestionContent";
import QUESTION_TYPE from "@/Entries/Code/QUESTION_TYPE";
import QuestionSingleChoice from "@/Components/Questions/QuestionSingleChoice";
import QuestionMultipleChoice from "@/Components/Questions/QuestionMultipleChoice";


const getQuestionContent = (questionContent:QuestionContent): React.JSX.Element => {
  if(questionContent.questionTypeId === QUESTION_TYPE.SINGLE_CHOICE){
    // @ts-ignore
    return <QuestionSingleChoice>{questionContent}</QuestionSingleChoice>
  }
  else if(questionContent.questionTypeId === QUESTION_TYPE.MULTIPLE_CHOICE){
    // @ts-ignore
    return <QuestionMultipleChoice>{questionContent}</QuestionMultipleChoice>
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
      <Space key={index} direction="vertical">
        <div>
          <b>{question.questionIndex}</b>. <Tag>{question.questionContent.questionTypeName}</Tag>(本题{question.questionPointValue}分)
        </div>
        <div>
          {question.questionStem}
        </div>
        <div>{questionContent}</div>
      </Space>
    )
  })
  return (
    <div>
      {questionCardContent}

    </div>
  )
}

export default QuestionAreaCard;