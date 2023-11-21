import {Badge, Button, theme} from "antd";
import React, {useContext} from "react";
import {QuestionCircleFilled} from "@ant-design/icons";
import {ExamContext} from "@/Context/ExamContext";
const {useToken} = theme
interface AnswerSheetBtnProp{
  questionIndex: number,
}

const AnswerSheetBtn = (
  {
    questionIndex,
  }: AnswerSheetBtnProp):React.JSX.Element =>
{
  const {selectedQuestion, examQuestions, handleSelectedChanged} = useContext(ExamContext);
  const question = examQuestions[questionIndex];
  const isSelected = questionIndex === selectedQuestion;
  const {token} = useToken();

  let status = isSelected? "default": question.isAnswered? "primary": "dashed";

  let selectedStyle = {
    fontWeight: "bold",
    background: token["blue-6"],
    color: "#fff"
  }

  let answerStyle = {
    background: token["blue-2"],
    fontWeight: isSelected? "bold": "normal",
    color:"#000"
  }

  let style = isSelected? selectedStyle: question.isAnswered? answerStyle : {}

  return (
    <Badge
      count={question.isMarked?<QuestionCircleFilled  style={{ color: '#f5222d' }}/>:0}
    >
      <Button
        // @ts-ignore
        type={status}
        // size="small"
        style={style}
        onClick={() => handleSelectedChanged(questionIndex)}
      >
        {question.questionIndex}
      </ Button>
    </Badge>
  )
}

export default AnswerSheetBtn