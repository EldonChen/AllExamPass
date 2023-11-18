import React from "react";
import {useSelector} from "react-redux";
import {Button, Flex, Table, Tag} from "antd";
import {ColumnsType} from "antd/es/table";
import {ExamPageInfo, ExamRoomRes, QuestionType} from "@/Entries/ExamRoomRes";
import {parseTime} from "@/utils/date";

const ExamRoomPage = ():React.JSX.Element => {
  const {
    examInfos,
    examRoomDirection
    // @ts-ignore
  } = useSelector(state => state.exam)



  let examPageInfos: ExamPageInfo[] = [...examInfos];
  examPageInfos.sort((a, b) => a.index - b.index);
  examPageInfos = examPageInfos.map(info => {
    return {
      ...info,
      timeLimitedStr: info.requireTimeLimited ? '无限制' : parseTime(info.timeLimited ? info.timeLimited * 1000 : 0),
      statusStr: '未开始',
      key: info.index,
    }
  })
  const dataCol: ColumnsType<ExamRoomRes> = [
    {
      title: '',
      dataIndex: 'index',
      key: 'index',
    },
    {
      title: '试卷名称',
      dataIndex: 'examPageName',
      key: 'examPageName',
    },
    {
      title: '试题数量',
      dataIndex: 'questionNumber',
      key: 'questionNumber',
    },
    {
      title: '试题类型',
      dataIndex: 'questionType',
      key: 'questionType',
      // @ts-ignore
      render: (_: any, {questionType}) => (<>
        {questionType.map((type: QuestionType) => {
          return <Tag key={type.id}>{type.name}</Tag>
        })}
      </>)
    },
    {
      title: '时间限制',
      dataIndex: 'timeLimitedStr',
      key: 'timeLimitedStr',
    },
    {
      title: '当前状态',
      dataIndex: 'statusStr',
    },
    {
      title: '',
      key: 'examPageId',
      render: (examPageId: string) => (
        <Button>进入答题</Button>
      )
    }
  ]

  return (
    <Flex
      vertical
      gap="middle"
      justify="center"
      style={{
        height: "100%",
        width: "80%",
        margin: "0 auto"
      }}
    >
      {examRoomDirection}
      <Table
        dataSource={examPageInfos}
        // @ts-ignore
        columns={dataCol}
        pagination={false}
        bordered
        title={
          () => (<b
            style={{
              fontSize:'1.3em',
            }}
          >
            考试信息</b>)
        }
      />
      <Button size="large" block>我要交卷</Button>
    </Flex>
  )

}

export default ExamRoomPage;