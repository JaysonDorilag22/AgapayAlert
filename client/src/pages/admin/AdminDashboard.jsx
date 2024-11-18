
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AlertTrendChart from "./charts/AlertTrendChart";
import ALPRDataMap from "./charts/ALPRDataMap";
import CityReportChart from "./charts/CityReportChart";
import FeedbackDataChart from "./charts/FeedbackDataChart";
import UserActivityTable from "./charts/UserActivityTable";

function AdminDashboard() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reports (YTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">322</div>
            <p className="text-xs text-muted-foreground">+8.1% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solved Cases (YTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">273</div>
            <p className="text-xs text-muted-foreground">84.8% resolution rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72 hours</div>
            <p className="text-xs text-muted-foreground">-5 hours from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Community Alerts Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,284</div>
            <p className="text-xs text-muted-foreground">Reaching 2.5M people</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {/* <div className="aspect-video rounded-xl bg-muted/50"> */}
          <AlertTrendChart />
        {/* </div> */}

        {/* <div className="aspect-video rounded-xl bg-muted/50"> */}
          <ALPRDataMap />
        {/* </div> */}
        {/* <div className="aspect-video rounded-xl bg-muted/50"> */}
          <CityReportChart />
        {/* </div> */}
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
        {/* <FeedbackDataChart/> */}
        <UserActivityTable />
      </div>
    </div>
  );
}

export default AdminDashboard;
