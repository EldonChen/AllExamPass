import React, {useContext, useEffect, useState} from "react";
import {ExamContext} from "@/Context/ExamContext";
import {ProCard} from "@ant-design/pro-components";
import request from "@/utils/request";
import {Tag} from "antd";

const QuestionArea = ():React.JSX.Element => {
  const {selectedQuestion, examQuestions} = useContext(ExamContext);
  const [content, setContent] = useState(<></>);
  useEffect(() => {
    if(examQuestions){
      // setContent(examQuestions[selectedQuestion].questionId);
      request({
        url: '/api/question',
        method: 'get',
        params: {
          questionId: examQuestions[selectedQuestion].questionId
        }
      }).then((res) => {
        // @ts-ignore
        let questionStemText = res["questionContent"];
        // @ts-ignore
        let questionType = res["questionTypeName"];
        // @ts-ignore
        let questionPointValue = res["questionPointValue"];
        let questionStem = (
          <div>
            <Tag>{questionType}</Tag>
            (本题{questionPointValue}分)<br/>
            {questionStemText}
          </div>
        )
        setContent(questionStem)
      }).catch((err) => {

      })
    }
  }, [selectedQuestion]);
  return (
    <>
      <ProCard
        boxShadow
        style={{
          minHeight: "20vh"
        }}
      >
        {content}
      </ProCard>
    </>
  )
}

export default QuestionArea