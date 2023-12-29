import Sidebar from "../components/[sidebar]/Sidebar";
export default function page() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">page</div>
    </div>
  );
}
