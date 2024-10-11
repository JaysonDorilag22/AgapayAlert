import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card"
import logo3 from "../../assets/logo3.png"
import logo4 from "../../assets/logo4.png"
import { useTheme } from "@/components/theme-provider"

export default function SignUp() {
    const { theme } = useTheme();
    const [phoneNumber, setPhoneNumber] = useState("")

    const formatPhoneNumber = (input) => {
      const cleaned = input.replace(/\D/g, "")
      if (cleaned.length <= 10) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3").trim()
      } else {
        return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "+$1 $2 $3 $4").trim()
      }
    }
  
    const handlePhoneChange = (e) => {
      const formatted = formatPhoneNumber(e.target.value)
      setPhoneNumber(formatted)
    }
  
  return (
    <Card className="w-full max-w-6xl mx-auto my-10 p-4">
      <CardHeader className="text-center">
        <img src={theme === "dark" ? logo4 : logo3} alt="Logo" className="w-10 h-10 text-center mx-auto mb-3"/>
        <CardTitle className="text-4xl font-bold">Sign Up for Agapay Alert</CardTitle>
        <CardDescription>Create your account to get started with our emergency alert system</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+63 XXX XXX XXXX"
                value={phoneNumber}
                onChange={handlePhoneChange}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input id="confirmPassword" type="password" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="street">Street Address</Label>
              <Input id="street" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="state">State/Province</Label>
              <Input id="state" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipcode">Zip Code</Label>
              <Input id="zipcode" required />
            </div>
            <div className="flex items-end">
              <Button className="w-full" type="submit">Create Account</Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}