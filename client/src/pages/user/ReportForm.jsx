"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/components/theme-provider";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
export default function ReportForm() {
  const { theme } = useTheme();

  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);

  const handleImageUpload = (e) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleVideoUpload = (e) => {
    if (e.target.files) {
      setVideo(e.target.files[0]);
    }
  };

  return (
    <Card className="w-full max-w-6xl mx-auto my-10">
      <CardHeader>
      <img
              src={theme === "dark" ? logo4 : logo3}
              alt="Logo"
              className="w-14 h-14 text-center mx-auto mb-3"
            />
        <CardTitle className="text-3xl font-bold text-center">AgapayAlert Report Form</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter the full name of the person" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" placeholder="Enter the person's age" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="incident-type">Type of Incident</Label>
              <Select>
                <SelectTrigger id="incident-type">
                  <SelectValue placeholder="Select incident type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="missing">Missing</SelectItem>
                  <SelectItem value="abducted">Abducted</SelectItem>
                  <SelectItem value="wanted">Wanted</SelectItem>
                  <SelectItem value="kidnapped">Kidnapped</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-seen">Last Seen Location</Label>
              <Input id="last-seen" placeholder="Pinpoint the last known location" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe the person, what they were last seen wearing, any notable features, etc."
              className="min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="images">Images</Label>
              <Input id="images" type="file" multiple accept="image/*" onChange={handleImageUpload} />
              <p className="text-sm text-muted-foreground">Upload images of the person</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="video">Video (Optional)</Label>
              <Input id="video" type="file" accept="video/*" onChange={handleVideoUpload} />
              <p className="text-sm text-muted-foreground">Upload a video if available</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="reward">Reward (Optional)</Label>
              <Input id="reward" type="number" placeholder="Enter reward amount (if any)" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact">Contact Information</Label>
              <Input id="contact" placeholder="Enter your contact information (phone number or email)" />
            </div>
          </div>

          <Button type="submit" className="w-full">
            Submit Report
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}