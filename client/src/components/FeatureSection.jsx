import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Users, Shield, Bell, Search } from "lucide-react";

export default function FeatureSection() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="flex justify-center py-24 lg:py-32 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10 p-3">
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <AlertTriangle className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Alert Initiation</CardTitle>
            </CardHeader>
            <CardContent>
              Authorities issue an AgapayAlert when a person is reported missing in your City and surrounding areas.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <Users className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Information Gathering</CardTitle>
            </CardHeader>
            <CardContent>
              Important details about the missing person are collected and verified by authorities.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <Bell className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Alert Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              Alerts are rapidly distributed to the public through SMS, social media, and other platforms.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <Search className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Public Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              Citizens are encouraged to report sightings or any helpful information about the missing person.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <Shield className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Coordinated Response</CardTitle>
            </CardHeader>
            <CardContent>
              Law enforcement and community partners work together to search for and rescue the missing person.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                <AlertTriangle className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
              </div>
              <CardTitle>Alert Resolution</CardTitle>
            </CardHeader>
            <CardContent>
              The alert is canceled when the missing person is found or when the search is deemed no longer effective.
            </CardContent>
          </Card>
          {/* End Card */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
