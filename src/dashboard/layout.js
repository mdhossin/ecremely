import Overlay from './provider/overlay';
import TopNavigation from './topnavigation';
import SideNavigation from './sidenavigation';
import DashboardProvider from './provider/context';

const style = {
  container: `bg-[#f2f4f8] h-screen overflow-hidden relative`,
  main: `h-screen overflow-auto pb-36 px-2 md:pb-8 lg:px-4 m-0`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-24`,
};

export default function DashboardLayout({ children }) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <Overlay />
          <SideNavigation mobilePosition="right" />
          <div className={style.mainContainer}>
            <TopNavigation />
            <main className={style.main}>{children}</main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
