import MultipleChoice from "@/Entries/QuestionEntries/MultipleChoice";
import React, {useContext, useState} from "react";
import {ExamContext} from "@/Context/ExamContext";
import {Checkbox, Radio, Space} from "antd";

import {CheckboxValueType} from "antd/es/checkbox/Group";

const QuestionMultipleChoice = ({children}: {children: MultipleChoice}) : React.JSX.Element => {
  const {handleAnswer} = useContext(ExamContext);
  const [selectedOption, SetSelectOption] = useState([] as CheckboxValueType[]);
  const onChange = (list: CheckboxValueType[]) => {
    SetSelectOption(list)
  }

  let optionContent = children.options.map((content, index) => {
    return <Checkbox value={index} key={index}>{content}</Checkbox>
  })


  let hintText = (
    children.maxSelectableNum? <div>（最多可选<b>{children.maxSelectableNum}</b>项）</div>: <></>
  )

  return (
    <div>
      <Checkbox.Group onChange={onChange} value={selectedOption}>
        <Space direction="vertical">
          {hintText}
          {optionContent}
        </Space>
      </Checkbox.Group>
    </div>
  )
}

export default QuestionMultipleChoice