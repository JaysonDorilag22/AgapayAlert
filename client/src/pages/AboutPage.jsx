import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  Bell, Search, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center mb-8">About AgapayAlert</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is AgapayAlert?</h2>
        <p className="text-lg mb-4">
          AgapayAlert is an emergency alert system inspired by Amber Alert, designed to quickly disseminate critical information during emergencies in the Philippines. Our mission is to leverage technology and community engagement to save lives and mitigate the impact of disasters.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-6 w-6 text-blue-500" />
                Detection
              </CardTitle>
            </CardHeader>
            <CardContent>
              AgapayAlert constantly monitors various sources, including official channels, social media, and user reports, to detect potential emergencies or threats.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-6 w-6 text-green-500" />
                Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
              Our team of experts quickly verifies the information to ensure its accuracy and relevance before issuing an alert, minimizing false alarms.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-6 w-6 text-yellow-500" />
                Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              Once verified, alerts are rapidly distributed through multiple channels, including our mobile app, SMS, social media, and broadcast systems, reaching affected areas quickly.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-purple-500" />
                Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              Citizens, emergency services, and local authorities receive the alerts and can take appropriate action, coordinate efforts, and provide assistance as needed.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Rapid alert distribution across multiple platforms</li>
          <li>Geo-targeted notifications to affected areas</li>
          <li>Real-time updates and information sharing</li>
          <li>Integration with local emergency services</li>
          <li>User-friendly mobile app for easy access to alerts and reporting</li>
          <li>Multilingual support for diverse communities</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
        <p className="text-lg mb-4">
          AgapayAlert relies on community participation to be effective. Here&apos;s how you can help:
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="secondary">
            Download the App
          </Button>
        </div>
      </section>
    </div>
  )
}