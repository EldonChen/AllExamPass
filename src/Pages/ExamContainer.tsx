import React, {useEffect, useState} from "react";
import request from "@/utils/request";
import {Layout, theme} from "antd";
import {Outlet, useNavigate, useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setExamInfos, setExamRoomDirection, setExamRoomId} from "@/Store/modules/examStore";

const {Header, Content, Footer} = Layout;
const {useToken} = theme;


const ExamContainer = (): React.JSX.Element => {
  const [params] = useSearchParams()
  // @ts-ignore
  const examRoomId = params.examRoomId;
  // @ts-ignore
  const dispatch = useDispatch();
  dispatch(setExamRoomId(examRoomId))
  const navigate = useNavigate();
  const [examRoomName, setExamRoomName] = useState<string>('');
  const {token} = useToken();

  useEffect(() => {
    let ignoreRes = false

    request({
      url: '/api/examRoom',
      method: 'get',
      params: {
        examRoomId: examRoomId
      }
    }).then((res) => {
      if (!ignoreRes) {
        // @ts-ignore
        setExamRoomName(res["examName"]);
        // @ts-ignore
        dispatch(setExamRoomDirection(res['direction']));
        // @ts-ignore
        dispatch(setExamInfos(res['examPageInfos']));
        navigate('/exam/examRoom')
      }
    }).catch((err) => {
      console.log('error')
      console.error(err);
    })
    return () => {
      ignoreRes = true
    };
  }, [dispatch, examRoomId, navigate]);

  return (
    <Layout>
      <Header
        style={{
          height: '6vh',
          background: token.colorBgContainer,
          fontSize: token.fontSizeHeading3,
          textAlign: 'center'
        }}
      >
        {examRoomName}
      </Header>
      <Content
        style={{
          background: '#fafafa',
          height: '88vh',
          padding: '10px',
          textAlign: 'left'
        }}
      >
        <Outlet/>
      </Content>
      <Footer
        style={{
          height: '6vh',
          textAlign: 'center'
        }}>
        EldonChen©2023 版权所有，违法必究
      </Footer>
    </Layout>
  )
}

export default ExamContainer;