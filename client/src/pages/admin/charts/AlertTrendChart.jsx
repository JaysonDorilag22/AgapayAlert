"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const alertData = [
  { date: "2024-01-01", alerts: 5 },
  { date: "2024-01-02", alerts: 7 },
  { date: "2024-01-03", alerts: 4 },
  { date: "2024-01-04", alerts: 6 },
  { date: "2024-01-05", alerts: 8 },
  { date: "2024-01-06", alerts: 3 },
  { date: "2024-01-07", alerts: 9 },
];

export default function AlertTrendChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Alert Trends</CardTitle>
        <CardDescription>
          Number of alerts issued daily over time
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            alerts: {
              label: "Alerts",
              color: "hsl(var(--chart-1))",
            },
          }}
          // className="h-[300px]"
        >
          {/* <ResponsiveContainer width="100%" height="100%"> */}
            <LineChart data={alertData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="alerts" stroke="#8884d8" />
            </LineChart>
          {/* </ResponsiveContainer> */}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
