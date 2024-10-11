'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts'

const monthlyData = [
  { month: 'Jan', reports: 45, solved: 38 },
  { month: 'Feb', reports: 52, solved: 45 },
  { month: 'Mar', reports: 49, solved: 41 },
  { month: 'Apr', reports: 63, solved: 52 },
  { month: 'May', reports: 55, solved: 47 },
  { month: 'Jun', reports: 58, solved: 50 },
]

const caseTypes = [
  { name: 'Missing Children', value: 35 },
  { name: 'Missing Adults', value: 45 },
  { name: 'Runaways', value: 15 },
  { name: 'Other', value: 5 },
]

const communityStats = [
  { metric: 'Registered Users', value: 15234 },
  { metric: 'Active Volunteers', value: 3750 },
  { metric: 'Tips Submitted', value: 2890 },
  { metric: 'Awareness Events', value: 156 },
  { metric: 'Training Sessions', value: 89 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function StatisticsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold mb-2">AgapayAlert Statistics</h1>
      <p className="text-muted-foreground mb-8">Transparency in our mission to find missing persons and engage the community</p>

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

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Reports vs Solved Cases</CardTitle>
          </CardHeader>
          <CardContent className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="reports" fill="#8884d8" name="Reports" />
                <Bar dataKey="solved" fill="#82ca9d" name="Solved" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Types of Missing Persons Cases</CardTitle>
          </CardHeader>
          <CardContent className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={caseTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {caseTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Community Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Metric</TableHead>
                <TableHead className="text-right">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {communityStats.map((stat) => (
                <TableRow key={stat.metric}>
                  <TableCell>{stat.metric}</TableCell>
                  <TableCell className="text-right">{stat.value.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}