export interface ExamRoomRes {
  direction?: string;
  examName: string;
  examPageInfos: ExamPageInfo[];
  [property: string]: any;
}

export interface ExamPageInfo {
  examPageId: string;
  examPageName: string;
  index: number;
  questionNumber: number;
  questionType: QuestionType[];
  requireTimeLimited: boolean;
  timeLimited?: number;
  [property: string]: any;
}

export interface QuestionType {
  id: string;
  name: string;
  [property: string]: any;
}