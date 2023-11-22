import { createHashRouter } from "react-router-dom";
import ExamContainer from "@/Components/Layout/ExamContainer";
import React from 'react';
import App from "@/Components/App";
import ExamRoomPage from "@/Components/Pages/Exam/ExamRoomPage";
import QuestionTypeEditor from "@/Components/Pages/Editor/QuestionTypeEditor";
import ExamPage from "@/Components/Pages/Exam/ExamPage";
import AdminContainer from "@/Components/Layout/AdminContainer";


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
  },
  {
    path: '/admin',
    element: <AdminContainer />
  }
])

export default router;