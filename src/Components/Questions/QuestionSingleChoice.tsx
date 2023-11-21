import React, {useContext, useState} from "react";
import {Radio, Space} from "antd";
import SingleChoice from "@/Entries/QuestionEntries/SingleChoice";
import {ExamContext} from "@/Context/ExamContext";

const QuestionSingleChoice = ({children}: {children:SingleChoice}):React.JSX.Element => {
  const {handleAnswer} = useContext(ExamContext);
  const [selectedOption, SetSelectOption] = useState(-1);
  const onClick = (value: number) => {
    if (value !== selectedOption){
      SetSelectOption(value);
      handleAnswer(value.toString())
    }
    else {
      SetSelectOption(-1);
      handleAnswer(null);
    }
  };

  let optionContent = children.options.map((content, index) => {
    return <Radio value={index} key={index} onClick={() => onClick(index)}>{content}</Radio>
  })

  return (
    <div>
      <Radio.Group name="Options" value={selectedOption}>
        <Space direction="vertical" size="small">
          {optionContent}
        </Space>
      </Radio.Group>
    </div>
  )
}

export default QuestionSingleChoice