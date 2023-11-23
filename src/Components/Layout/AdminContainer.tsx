import React, {useState} from "react";
import {PageContainer, ProCard, ProLayout} from "@ant-design/pro-components";
import adminRouter from "@/router/adminRouter";
import type { ProSettings } from '@ant-design/pro-components';
const AdminContainer = ():React.JSX.Element => {
  // const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
  //   fixSiderbar: true,
  //   layout: 'mix',
  //   splitMenus: false,
  // });

  const [pathname, setPathname] = useState('/welcome');
  const [component, setComponent] = useState(adminRouter.route.component)

  return (
    <ProLayout
      title="Exam All Pass"
      {...adminRouter}
      location={{
        pathname,
      }}
      menuFooterRender={(props) => {
        if (props?.collapsed) return undefined;
        return (
          <div
            style={{
              textAlign: 'center',
              paddingBlockStart: 12,
            }}
          >
            <div>© 2023 Exam All Pass</div>
            <div>by Eldon Chen</div>
          </div>
        );
      }}
      menuItemRender={(item, dom) => (
        <div
          onClick={() => {
            setPathname(item.path || '/welcome');
            item.component && setComponent(item.component)
          }}
        >
          {dom}
        </div>
      )}
    >
      <PageContainer >
        <ProCard
          boxShadow
        >
          {component}
        </ProCard>
      </PageContainer>
    </ProLayout>
  )
}

export default AdminContainer;