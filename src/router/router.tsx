import { createHashRouter } from "react-router-dom";
import ExamContainer from "@/Pages/ExamContainer";
import React from 'react';
import App from "@/Pages/App";
import ExamRoomPage from "@/Pages/Exam/ExamRoomPage";
import QuestionTypeEditor from "@/Pages/Editor/QuestionTypeEditor";
import ExamPage from "@/Pages/Exam/ExamPage";


const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/hello',
    element: <div>欢迎来到Exam All Pass</div>
  },
  {
    path: '/exam',
    element: <ExamContainer />,
    children: [
      {
        index: true,
        element: <ExamRoomPage />
      },
      {
        path: 'examPage',
        element: <ExamPage />
      }
    ]
  },
  {
    path: '/editor',
    children: [
      {
        path: 'questionType',
        element: <QuestionTypeEditor />
      }
    ]
  }
])

export default router;