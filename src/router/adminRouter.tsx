import {
  CrownFilled, SettingFilled,
  SmileFilled,
  TabletFilled, UserOutlined,
} from '@ant-design/icons';
import React from "react";
import AdminQuestionList from "@/Components/Pages/Admin/AdminQuestionList";

export default {
  route: {
    path: '/',
    component: <div>这个页面之后会改成DashBoard。</div>,
    routes: [
      {
        path: '/welcome',
        name: '欢迎',
        icon: <SmileFilled />,
        component: <div>这个页面之后会改成DashBoard。</div>,
      },
      {
        path: '/questionBank',
        name: '试题库',
        icon: <CrownFilled />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/questionBank/questionList',
            name: '试题列表',
            component: <AdminQuestionList/>,
          },
          {
            path: '/questionBank/questionTypeManagement',
            name: '题型管理',
            component: '创建和管理题型。题型分为默认题型和自定义题型，用户只能修改自定义题型',
          },
          {
            path: '/admin/sub-page3',
            name: '三级页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        name: '列表页',
        icon: <TabletFilled />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: '列表页面',
            icon: <CrownFilled />,
            routes: [
              {
                path: 'sub-sub-page1',
                name: '一一级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
                hidden: true
              },
              {
                path: 'sub-sub-page2',
                name: '一二级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
              {
                path: 'sub-sub-page3',
                name: '一三级列表页面',
                icon: <CrownFilled />,
                component: './Welcome',
              },
            ],
          },
          {
            path: '/list/sub-page2',
            name: '二级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
          {
            path: '/list/sub-page3',
            name: '三级列表页面',
            icon: <CrownFilled />,
            component: './Welcome',
          },
        ],
      },
      {
        path: '/userManagement',
        name: '用户管理',
        icon: <UserOutlined />,
        component: '管理用户状态，查看用户列表，用户权限配置等等，仅有管理员可以查看'
      },
      {
        path: '/websiteSetting',
        name: '网站设置',
        icon: <SettingFilled />,
        component: '用来设置网站的名称、版权角标、主题颜色、默认字号等信息，只有管理员才能查看'
      },
    ],
  },
};