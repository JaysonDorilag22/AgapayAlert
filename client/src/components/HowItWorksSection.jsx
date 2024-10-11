import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Users, Shield, Bell, Search, CheckCircle } from "lucide-react"

const steps = [
  { icon: AlertTriangle, title: "Alert Initiated", description: "Authorities in your City and surrounding areas assess the situation and issue an AgapayAlert." },
  { icon: Users, title: "Information Gathered", description: "Crucial details about the missing person are collected from local sources." },
  { icon: Bell, title: "Alert Distributed", description: "The alert is rapidly disseminated through various channels within Taguig and nearby cities." },
  { icon: Search, title: "Public Engagement", description: "Citizens are encouraged to report any relevant information, focusing on the Taguig area." },
  { icon: Shield, title: "Coordinated Response", description: "Law enforcement and community partners within Taguig and nearby cities work together." },
  { icon: CheckCircle, title: "Alert Resolution", description: "The alert is canceled when the person is found or after thorough efforts have proven the alert ineffective." },
]

const faqs = [
  { question: "How quickly are AgapayAlerts issued?", answer: "AgapayAlerts are typically issued within hours of a reported missing person case, after authorities have verified the criteria for an alert." },
  { question: "Can I receive AgapayAlerts on my phone?", answer: "Yes, AgapayAlerts are sent to mobile phones in the affected area through the emergency alert system." },
  { question: "How can I help during an AgapayAlert?", answer: "Stay vigilant, follow official instructions, and report any relevant information to the provided contact numbers immediately." },
  { question: "Are all missing person cases eligible for AgapayAlert?", answer: "No, AgapayAlerts are reserved for cases that meet specific criteria, including imminent danger to the missing person." },
]

export default function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState("public")

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-8">How AgapayAlert Works ?</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="public">For the Public</TabsTrigger>
            <TabsTrigger value="authorities">For Authorities</TabsTrigger>
          </TabsList>
          <TabsContent value="public">
            <Card>
              <CardHeader>
                <CardTitle>AgapayAlert Process</CardTitle>
                <CardDescription>Understanding how the system works can help you respond effectively during an alert.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {steps.map((step, index) => (
                    <Card key={index} className="flex flex-col items-center text-center p-4">
                      <step.icon className="w-12 h-12 mb-4 text-primary" />
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="authorities">
            <Card>
              <CardHeader>
                <CardTitle>Issuing an AgapayAlert</CardTitle>
                <CardDescription>Guidelines for law enforcement and emergency services.</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-4">
                  <li>Verify that the case meets AgapayAlert criteria for Taguig and nearby cities</li>
                  <li>Gather all necessary information about the missing person from local sources</li>
                  <li>Prepare alert content, including description and last known location within the specified area</li>
                  <li>Coordinate with local alert systems in Taguig and surrounding areas</li>
                  <li>Issue the alert through designated channels targeting Taguig and nearby cities</li>
                  <li>Monitor and follow up on incoming tips and information from the local public</li>
                  <li>Update or cancel the alert as necessary:
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Cancel the alert if the person is found and safe</li>
                      <li>If the person is not found after thorough efforts, authorities will review and either continue the alert with updates or decide to cancel it based on the case&apos;s progress.</li>
                    </ul>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Help?</h3>
          <p className="mb-6">Join our network of vigilant citizens and help make our community safer.</p>
          <Button size="lg">Sign Up for AgapayAlert Notifications</Button>
        </div>
      </div>
    </section>
  )
}
