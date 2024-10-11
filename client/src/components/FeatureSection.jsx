import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Users, Shield, Bell, Search } from "lucide-react";
import { motion } from "framer-motion";

// Card data
const cardData = [
  {
    icon: AlertTriangle,
    title: "Alert Initiation",
    content: "Authorities issue an AgapayAlert when a person is reported missing in your City and surrounding areas.",
    delay: 0.1,
  },
  {
    icon: Users,
    title: "Information Gathering",
    content: "Important details about the missing person are collected and verified by authorities.",
    delay: 0.2,
  },
  {
    icon: Bell,
    title: "Alert Distribution",
    content: "Alerts are rapidly distributed to the public through SMS, social media, and other platforms.",
    delay: 0.3,
  },
  {
    icon: Search,
    title: "Public Engagement",
    content: "Citizens are encouraged to report sightings or any helpful information about the missing person.",
    delay: 0.4,
  },
  {
    icon: Shield,
    title: "Coordinated Response",
    content: "Law enforcement and community partners work together to search for and rescue the missing person.",
    delay: 0.5,
  },
  {
    icon: AlertTriangle,
    title: "Alert Resolution",
    content: "The alert is canceled when the missing person is found or when the search is deemed no longer effective.",
    delay: 0.6,
  },
];

export default function FeatureSection() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="flex justify-center py-24 lg:py-32 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10 p-3">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay }}
            >
              <Card>
                <CardHeader className="pb-4 flex-row items-center gap-4">
                  <div className="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-2 bg-primary">
                    <card.icon className="flex-shrink-0 w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>{card.content}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}