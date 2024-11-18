import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Search,
  PlusCircle,
  FileText,
  MessageSquare,
  Share2,
  Bell,
  Upload,
} from "lucide-react";
import Placeholder from "./placeholder.svg"
import { ModeToggle } from "@/components/mode-toggle";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function UserHome({
  userName = "User",
  userAvatar = "/placeholder.svg",
}) {

  const [searchQuery, setSearchQuery] = useState("");
  const [newReport, setNewReport] = useState({
    firstName: "",
    lastName: "",
    nickname: "",
    lastSeen: "",
    details: "",
    photo: null,
    video: null,
  });

  // Mock data for demonstration
const missingPersonReports = [
    { id: 1, reporterName: "John Doe", missingPersonName: "Sarah Johnson", age: 25, lastSeen: "2023-11-15", description: "Last seen wearing a red jacket and blue jeans. She has blonde hair and green eyes.", comments: 5, shares: 12, image: Placeholder },
    { id: 2, reporterName: "Jane Smith", missingPersonName: "Michael Brown", age: 40, lastSeen: "2023-11-14", description: "Michael has a distinctive tattoo on his right arm. He was last seen near Central Park.", comments: 8, shares: 20, image: Placeholder },
    { id: 3, reporterName: "Mike Johnson", missingPersonName: "Emily Davis", age: 18, lastSeen: "2023-11-13", description: "Emily is a college student who didn't return to her dorm. She has braces and wears glasses.", comments: 15, shares: 30, image: Placeholder },
    { id: 4, reporterName: "Alice Green", missingPersonName: "David Wilson", age: 30, lastSeen: "2023-11-12", description: "David was last seen at his workplace. He has a beard and wears glasses.", comments: 10, shares: 25, image: Placeholder },
    { id: 5, reporterName: "Bob White", missingPersonName: "Laura Martinez", age: 22, lastSeen: "2023-11-11", description: "Laura was last seen at a coffee shop. She has long brown hair and brown eyes.", comments: 7, shares: 18, image: Placeholder },
    { id: 6, reporterName: "Charlie Black", missingPersonName: "James Anderson", age: 35, lastSeen: "2023-11-10", description: "James was last seen at a gym. He has a muscular build and short hair.", comments: 12, shares: 22, image: Placeholder },
    { id: 7, reporterName: "Diana Blue", missingPersonName: "Sophia Lee", age: 28, lastSeen: "2023-11-09", description: "Sophia was last seen at a library. She has black hair and wears glasses.", comments: 9, shares: 15, image: Placeholder },
    { id: 8, reporterName: "Ethan Brown", missingPersonName: "Daniel Harris", age: 45, lastSeen: "2023-11-08", description: "Daniel was last seen at a park. He has a bald head and a goatee.", comments: 11, shares: 20, image: Placeholder },
    { id: 9, reporterName: "Fiona White", missingPersonName: "Olivia Taylor", age: 19, lastSeen: "2023-11-07", description: "Olivia was last seen at her university campus. She has curly hair and wears a blue backpack.", comments: 6, shares: 14, image: Placeholder },
    { id: 10, reporterName: "George Black", missingPersonName: "Henry Walker", age: 50, lastSeen: "2023-11-06", description: "Henry was last seen at a grocery store. He has gray hair and wears a black jacket.", comments: 13, shares: 19, image: Placeholder },
    { id: 11, reporterName: "Hannah Gray", missingPersonName: "Chloe Adams", age: 27, lastSeen: "2023-11-05", description: "Chloe was last seen at a train station. She has short blonde hair and was wearing a green scarf.", comments: 4, shares: 10, image: Placeholder },
    { id: 12, reporterName: "Ivan Gold", missingPersonName: "Ryan Scott", age: 33, lastSeen: "2023-11-04", description: "Ryan was last seen jogging near the river. He has a slim build and wears a fitness tracker.", comments: 7, shares: 12, image: Placeholder },
    { id: 13, reporterName: "Jenna Rose", missingPersonName: "Isabella King", age: 16, lastSeen: "2023-11-03", description: "Isabella was last seen leaving her school. She has shoulder-length brown hair and wears braces.", comments: 18, shares: 28, image: Placeholder },
    { id: 14, reporterName: "Kyle Stone", missingPersonName: "Nathan Carter", age: 60, lastSeen: "2023-11-02", description: "Nathan was last seen at a hospital. He has white hair and uses a cane.", comments: 5, shares: 9, image: Placeholder },
    { id: 15, reporterName: "Lucy Lane", missingPersonName: "Sophia Rivera", age: 21, lastSeen: "2023-11-01", description: "Sophia was last seen at a mall. She has a petite build and long black hair.", comments: 11, shares: 19, image: Placeholder },
    { id: 16, reporterName: "Mark Fisher", missingPersonName: "Jack Robinson", age: 42, lastSeen: "2023-10-31", description: "Jack was last seen at a bus terminal. He has a beard and wears a baseball cap.", comments: 6, shares: 13, image: Placeholder },
    { id: 17, reporterName: "Nina Brown", missingPersonName: "Ella Bennett", age: 24, lastSeen: "2023-10-30", description: "Ella was last seen at a nightclub. She has a tattoo on her left wrist and curly red hair.", comments: 14, shares: 23, image: Placeholder },
    { id: 18, reporterName: "Oscar White", missingPersonName: "Liam Thompson", age: 38, lastSeen: "2023-10-29", description: "Liam was last seen hiking in the mountains. He is tall and wears a green jacket.", comments: 9, shares: 17, image: Placeholder },
    { id: 19, reporterName: "Paula Gray", missingPersonName: "Mia Evans", age: 29, lastSeen: "2023-10-28", description: "Mia was last seen leaving a yoga class. She has long blonde hair and wears yoga attire.", comments: 8, shares: 15, image: Placeholder },
    { id: 20, reporterName: "Quinn Black", missingPersonName: "Noah Edwards", age: 36, lastSeen: "2023-10-27", description: "Noah was last seen at an airport. He has a medium build and wears a leather jacket.", comments: 10, shares: 18, image: Placeholder }
  ];
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReport((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setNewReport((prev) => ({ ...prev, [name]: files[0] }));
    }
  };  
  
  const handleDateChange = (date) => {
    setNewReport({ ...newReport, lastSeen: date })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting report:", newReport);
    // Here you would typically send the data to your backend
    // Reset the form after submission
    setNewReport({
      firstName: "",
      lastName: "",
      nickname: "",
      lastSeen: "",
      details: "",
      photo: null,
      video: null,
    });
  };

  const filteredReports = missingPersonReports.filter((report) =>
    report.missingPersonName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Missing Person Reports</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
          </Avatar>
          <ModeToggle/>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-[1fr_3fr]">
        <aside className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" /> New Report
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px]">
                  <DialogHeader>
                    <DialogTitle>Create New Report</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={newReport.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={newReport.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nickname">Nickname</Label>
                      <Input
                        id="nickname"
                        name="nickname"
                        value={newReport.nickname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
      <Label htmlFor="lastSeen">Last Seen</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !newReport.lastSeen && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4" />
            {newReport.lastSeen ? format(newReport.lastSeen, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={newReport.lastSeen}
            onSelect={handleDateChange}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
                    <div className="space-y-2">
                      <Label htmlFor="details">Details</Label>
                      <Textarea
                        id="details"
                        name="details"
                        value={newReport.details}
                        onChange={handleInputChange}
                        placeholder="Provide details about the missing person..."
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="photo">Photo (optional)</Label>
                      <Input
                        id="photo"
                        name="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="video">Video (optional)</Label>
                      <Input
                        id="video"
                        name="video"
                        type="file"
                        accept="video/*"
                        onChange={handleFileChange}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Post Report
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button variant="outline" className="w-full">
                <FileText className="mr-2 h-4 w-4" /> My Reports
              </Button>
              <Button variant="outline" className="w-full">
                <Search className="mr-2 h-4 w-4" /> Search Cases
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <span>Active Cases</span>
                <Badge variant="secondary">25</Badge>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span>Resolved Cases</span>
                <Badge variant="secondary">10</Badge>
              </div>
            </CardContent>
          </Card>
        </aside>

        <main className="space-y-6">
          <div className="space-y-2">
            <Input
              placeholder="Search missing person reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          <ScrollArea className="h-[600px]">
            {filteredReports.map((report) => (
              <Card key={report.id} className="mb-4">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>
                        {report.reporterName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{report.reporterName}</p>
                      <p className="text-sm text-muted-foreground">
                        Reported on {report.lastSeen}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold mb-2">
                    Missing: {report.missingPersonName}, Age: {report.age}
                  </h3>
                  <div className="relative w-full h-64">
                    <img
                      src={report.image}
                      alt={`Image of ${report.missingPersonName}`}
                      style={{ objectFit: "cover" }}
                      className="rounded-md w-full h-full"
                    />
                  </div>
                  <p>{report.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="ghost">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {report.comments} Comments
                  </Button>
                  <Button variant="ghost">
                    <Share2 className="mr-2 h-4 w-4" />
                    {report.shares} Shares
                  </Button>
                </CardFooter>
                <Separator />
                <CardFooter>
                  <Input
                    placeholder="Write a comment..."
                    className="w-full mt-4"
                  />
                </CardFooter>
              </Card>
            ))}
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
