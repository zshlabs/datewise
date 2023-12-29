import { LayoutProps } from "@/types/props";
import Sidebar from "@/app/components/[sidebar]/Sidebar";

function ApplicationLayout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-[256px,1fr] h-screen">
      <Sidebar />

      {children}
    </div>
  );
}

export default ApplicationLayout;
