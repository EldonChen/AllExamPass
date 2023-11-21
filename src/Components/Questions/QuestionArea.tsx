import React, {useContext, useEffect, useState} from "react";
import {ExamContext} from "@/Context/ExamContext";
import {ProCard} from "@ant-design/pro-components";
import request from "@/utils/request";
import {Tag} from "antd";
import {useSearchParams} from "react-router-dom";
import QuestionAreaCard from "@/Components/Questions/QuestionAreaCard";

const QuestionArea = (): React.JSX.Element => {
  const {selectedQuestion, examQuestions} = useContext(ExamContext);
  const [examPageId] = useSearchParams()
  const [cardContent, setCardContent] = useState(<></>);
  const [cardQuestionContent, setCardQuestionContent] = useState(<></>);
  const [directionComponent, setDirectionComponent] = useState(<></>);
  useEffect(() => {
    if (examQuestions) {
      // setContent(examQuestions[selectedQuestion].questionId);
      request({
        url: '/api/questionGroup',
        method: 'get',
        params: {
          questionGroupId: examQuestions[selectedQuestion].questionId,
          examPageId: examPageId
        }
      }).then((res) => {
        // @ts-ignore
        let questionDirection = res["questionGroupDirection"];
        let questionStemText = "";
        // @ts-ignore
        if (res["questionGroupStem"]) {
          // @ts-ignore
          questionStemText = res["questionGroupStem"];
        }
        // @ts-ignore
        let questionType = res["questionGroupTypeName"];
        // @ts-ignore
        let children = res["children"];
        setCardQuestionContent(<QuestionAreaCard>{children}</QuestionAreaCard>)

        setDirectionComponent((
          <div>
            <Tag>{questionType}</Tag>
            <b>{questionDirection}</b>
          </div>
        ))
        let questionStem = (
          <div>
            {questionStemText}
          </div>
        )
        setCardContent(questionStem)
      }).catch((err) => {

      })
    }
  }, [selectedQuestion]);
  return (
    <>
      {directionComponent}
      <ProCard
        boxShadow
        style={{
          minHeight: "20vh"
        }}
      >
        {cardContent}
        {cardQuestionContent}
      </ProCard>
    </>
  )
}

export default QuestionArea