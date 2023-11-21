import MultipleChoice from "@/Entries/QuestionEntries/MultipleChoice";
import React, {useContext, useState} from "react";
import {ExamContext} from "@/Context/ExamContext";
import {Button, Checkbox, Space} from "antd";

import {CheckboxValueType} from "antd/es/checkbox/Group";

const QuestionMultipleChoice = ({children}: {children: MultipleChoice}) : React.JSX.Element => {
  const {handleAnswer} = useContext(ExamContext);
  const [selectedOption, SetSelectOption] = useState([] as CheckboxValueType[]);
  const [isNeedDisable, setIsNeedDisable] = useState(false)
  const onChange = (list: CheckboxValueType[]) => {
    if(list.length === 0){
      handleAnswer(null);
    }
    else{
      handleAnswer(list.toString());
    }
    SetSelectOption(list)
    if(children.maxSelectableNum && list.length >= children.maxSelectableNum){
      setIsNeedDisable(true);
    }else{
      setIsNeedDisable(false);
    }
  }

  const clearAll = () => {
    SetSelectOption([]);
    setIsNeedDisable(false);
  }

  let optionContent = children.options.map((content, index) => {
    return <Checkbox value={index} key={index} disabled={isNeedDisable && !selectedOption.includes(index)}>{content}</Checkbox>
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
          <Button type="link" onClick={clearAll}>清空已选</Button>
        </Space>
      </Checkbox.Group>
    </div>
  )
}

export default QuestionMultipleChoice