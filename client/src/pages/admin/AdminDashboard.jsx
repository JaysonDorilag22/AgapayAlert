import AlertTrendChart from "./charts/AlertTrendChart";
import ALPRDataMap from "./charts/ALPRDataMap";
import CityReportChart from "./charts/CityReportChart";
import FeedbackDataChart from "./charts/FeedbackDataChart";
import UserActivityTable from "./charts/UserActivityTable";

function AdminDashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50">
          <AlertTrendChart />
        </div>

        <div className="aspect-video rounded-xl bg-muted/50">
          <ALPRDataMap />
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <CityReportChart />
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        {/* <FeedbackDataChart/> */}
        <UserActivityTable />
      </div>
    </div>
  );
}

export default AdminDashboard;
