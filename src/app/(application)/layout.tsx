import { LayoutProps } from "@/types/props";
import Sidebar from "@/app/components/Sidebar";

function ApplicationLayout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-[15%,1fr] h-screen">
      <Sidebar />

      {children}
    </div>
  );
}

export default ApplicationLayout;
