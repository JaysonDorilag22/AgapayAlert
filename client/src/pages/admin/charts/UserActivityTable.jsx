import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
  
  const userActivityData = [
    { user: "John Doe", activity: "Reported Missing Person", timestamp: "2024-01-01 10:00 AM" },
    { user: "Jane Smith", activity: "Submitted Feedback", timestamp: "2024-01-02 03:45 PM" },
    { user: "Officer Ramos", activity: "Updated Alert Status", timestamp: "2024-01-03 08:15 AM" },
    { user: "Admin", activity: "Added New City", timestamp: "2024-01-04 11:30 AM" },
    { user: "User123", activity: "Marked Person Found", timestamp: "2024-01-05 07:20 PM" },
  ]
  
  export default function UserActivityTable() {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>User Activities</CardTitle>
          <CardDescription>Recent user activities in the system</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Activity</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {userActivityData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.user}</TableCell>
                  <TableCell>{item.activity}</TableCell>
                  <TableCell>{item.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    )
  }