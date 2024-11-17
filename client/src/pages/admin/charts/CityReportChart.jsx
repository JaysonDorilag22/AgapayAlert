"use client"

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const cityReportData = [
  { city: "Taguig", reports: 12 },
  { city: "Makati", reports: 8 },
  { city: "Pasig", reports: 15 },
  { city: "Mandaluyong", reports: 10 },
  { city: "Pateros", reports: 5 },
]

export default function CityReportChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>City Reports</CardTitle>
        <CardDescription>Number of reports across different cities</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            reports: {
              label: "Reports",
              color: "hsl(var(--chart-2))",
            },
          }}
        >
          {/* <ResponsiveContainer width="100%" height="100%"> */}
            <BarChart data={cityReportData}>
              <CartesianGrid />
              <XAxis dataKey="city" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="reports" fill="var(--color-reports)" />
            </BarChart>
          {/* </ResponsiveContainer> */}
        </ChartContainer>
      </CardContent>
    </Card>
  )
}