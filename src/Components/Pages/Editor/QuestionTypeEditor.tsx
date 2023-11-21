import React, {useRef, useState} from "react";
import {Button, Card, Input, InputRef, Layout, Space} from "antd";
import {ProCard} from "@ant-design/pro-components";
import {CheckCircleFilled, CheckOutlined, EditFilled} from "@ant-design/icons";
import { Typography } from 'antd';
const { Title } = Typography;

const {Sider, Content} = Layout

const cavasStyle = {
  margin: '0 auto',
  minWidth: '600px',
  maxWidth: '80%',
  marginTop: '2em',
}

const CanvasTitle = ({onFinished, children}:{onFinished:Function, children: string}) => {
  const [isEditing, setIsEditing] = useState(true)
  const inputRef  = useRef<InputRef>(null)
  let titleContent = null;
  if (isEditing){
    titleContent = (
      <div>
        <Space direction="horizontal" align="center" size={0}>
          <Input defaultValue={children} size={"large"} style={{fontSize:"1.5em", width:"20em"}} ref={inputRef}/>
          <Button
            type="link"
            style={{fontSize:"1.5em"}}
            onClick={
              () => {
                setIsEditing(false)
                onFinished(inputRef.current?.input?.value)
              }
            }
          >
            <CheckCircleFilled/>
          </Button>
        </Space>
      </div>
    )
  }
  else {
    titleContent = (
      <div>
        <Space direction="horizontal" align="baseline" size={0}>
          <Title level={2}>{children}</Title>
          <Button type="link" style={{fontSize:"1.5em"}}
            onClick={()=> setIsEditing(true)}
          >
            <EditFilled />
          </Button>
        </Space>
      </div>
    )
  }
  return (
    <div>
      {titleContent}
    </div>
  )
}


const QuestionTypeEditor = ():React.JSX.Element => {
  /*
  左中右布局，左边栏显示可选题型，右边栏显示属性，中间是画布。
  支持从左边栏向中间画布上添加组件
  画布本身支持单列布局和双列布局，支持设置是否公开
   */
  const [questionTypeName, setQuestionTypeName] = useState("未命名题型");

  return (
    <Layout hasSider>
      <Sider>左侧</Sider>
      <Content>
        <ProCard
          style={cavasStyle}
          boxShadow
          // @ts-ignore
          title={(
            <CanvasTitle
              onFinished={setQuestionTypeName}
            >
              {questionTypeName}
            </CanvasTitle>
          )}
        >
        </ProCard>
      </Content>
      <Sider>右侧</Sider>
    </Layout>
  )
}

export default QuestionTypeEditor