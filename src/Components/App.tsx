import React from 'react'
import {Link} from "react-router-dom";
import {List} from "antd";
import {useSelector} from "react-redux";

const routers = [
  {
    title: '考场页面',
    href: 'exam?examRoomId=123'
  },
  {
    title: '考试页面',
    href: 'exam/examPage'
  },
  {
    title: '题型编辑器',
    href: 'editor/questionType'
  }
]

const App = ():React.JSX.Element => {
  // @ts-ignore
  // const {examId} = useSelector(state => state.exam)
  // console.log(examId)
  return (
    <div>
      <List
        bordered
        header={<div>Exam All Pass路由一览</div>}
        dataSource={routers}
        renderItem = {(router) => {
          return (
            <List.Item
              key={router.href}
            >
              <Link
                to={router.href}
                style={{
                  fontSize: '2em',
                  margin: '10px'
                }}
              >
                {router.title}
              </Link>
            </List.Item>

          )
        }}
        style = {{
          width: '60%',
          fontSize: '2em',
          margin: '0 auto',
          marginTop: '50px'
        }}
      ></List>
    </div>
  )
}

export default App