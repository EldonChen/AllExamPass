import React, {useContext} from "react";
import {ExamContext} from "@/Context/ExamContext";
import AnswerSheetBtn from "@/Components/AnswerSheet/AnswerSheetBtn";
import {Space, theme} from "antd";
const {useToken} = theme
const AnswerSheet = (): React.JSX.Element => {
  const {examQuestions} = useContext(ExamContext);
  let buttonContent = null;
  const {token} = useToken();

  if(examQuestions){
    buttonContent = examQuestions.map((item, index) => {
      return (
        <span key={index}>
          <AnswerSheetBtn questionIndex={index} />
        </span>
      )
    })
  }
  return (
    <div>
      <p
        style={{
          fontSize: token.fontSizeHeading4,
          fontWeight: "bold",
          textAlign: "center"
        }}
      >答题卡</p>
      <Space wrap>
        {buttonContent}
      </Space>
    </div>

  )
}

export default AnswerSheet;