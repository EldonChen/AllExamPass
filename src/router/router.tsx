import { createHashRouter } from "react-router-dom";
import ExamContainer from "@/Pages/ExamContainer";
import React from 'react';
import App from "@/Pages/App";
import ExamRoomPage from "@/Pages/Exam/ExamRoomPage";


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
        path: 'examRoom',
        element: <ExamRoomPage />
      }
    ]
  }
])

export default router;