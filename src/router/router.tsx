import { createHashRouter } from "react-router-dom";
import ExamContainer from "@/Components/ExamContainer";
import React from 'react';
import App from "@/Components/App";
import ExamRoomPage from "@/Components/Pages/Exam/ExamRoomPage";
import QuestionTypeEditor from "@/Components/Pages/Editor/QuestionTypeEditor";
import ExamPage from "@/Components/Pages/Exam/ExamPage";


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