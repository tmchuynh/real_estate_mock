import UnstyledTable from "@/components/DynamicTable";
import MiniDrawer from "@/components/Navbar";

export default function Home() {
  return (
    <div className="d-flex">
    <MiniDrawer/>
      <UnstyledTable/>
    </div>
  )
}
