import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import request from "@/utils/request";
import AnswerSheet from "@/Components/AnswerSheet/AnswerSheet";
import {ExamContext} from "@/Context/ExamContext";
import {Button, Layout, theme} from "antd";
import {ExamQuestion} from "@/Entries/ExamPageRes";
import QuestionArea from "@/Components/Questions/QuestionArea";

const {useToken} = theme
const {Content, Sider} = Layout;


interface ExamPageContext {
  selectedQuestion: number,
  examQuestions: ExamQuestion[],
}

const ExamPage = (): React.JSX.Element => {

  const [contextObj, setContextObj] = useState({} as ExamPageContext);
  const [examPageId] = useSearchParams()
  const {token} = useToken();

  const handleAnswer = (answer: string | null) => {
    let q = contextObj.examQuestions;
    let s = contextObj.selectedQuestion;
    q[s].userAnswer = answer;
    q[s].isAnswered = answer !== null;
    setContextObj({
      ...contextObj,
      examQuestions: q
    })
  }

  const handleMark = () => {
    let q = contextObj.examQuestions;
    let s = contextObj.selectedQuestion;
    q[s].isMarked = !q[s].isMarked;
    setContextObj({
      ...contextObj,
      examQuestions: q
    })
  }

  const handleSelectedChanged = (newIndex: number) => {
    if(newIndex<0 || newIndex>=contextObj.examQuestions.length){
      return;
    }
    setContextObj({
      ...contextObj,
      selectedQuestion: newIndex
    })
  }


  useEffect(() => {
    let ignoreRes = false;

    request({
      url: '/api/examPage',
      method: 'get',
      params: {
        examPageId: examPageId,
      }
    }).then((res) => {
      if (!ignoreRes) {
        setContextObj({
          selectedQuestion: 0,
          // @ts-ignore
          examQuestions: res["questions"],
        })
      }
    }).catch((err) => {
      console.error(err);
    })
    return () => {
      ignoreRes = true;
    }
  }, [examPageId]);
  return (

    <Layout
      style={{
        minHeight: '88vh',
        maxHeight: '88vh',
      }}
    >
      <ExamContext.Provider value={{
        ...contextObj,
        handleSelectedChanged: handleSelectedChanged
      }}>
        <Sider
          width={300}
          style={{
            background: token["blue-1"],
            padding: 8,
            paddingTop: 0,
            overflowY: "scroll"
          }}
        >
          <AnswerSheet />
        </Sider>
        <Content
          style={{
            padding: "20px"
          }}
        >
          <QuestionArea />
          <Button onClick={() => handleAnswer("123")}>回答</Button>
          <Button onClick={() => handleAnswer(null)}>取消回答</Button>
          <Button onClick={() => handleMark()}>标记/取消标记</Button>
          <Button onClick={() => handleSelectedChanged(contextObj.selectedQuestion-1)}>上一题</Button>
          <Button onClick={() => handleSelectedChanged(contextObj.selectedQuestion+1)}>下一题</Button>
        </Content>
      </ExamContext.Provider>
    </Layout>
  )}

export default ExamPage;