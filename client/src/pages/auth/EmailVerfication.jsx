import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"

export default function EmailVerfication() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Email Verification</CardTitle>
          <CardDescription>Enter the 4-digit code sent to your email.</CardDescription>
        </CardHeader>
        <form>
          <CardContent className="flex items-center justify-center">
            <InputOTP maxLength={4} className="items-center justify-center">
              <InputOTPGroup>
                <InputOTPSlot index={0} className="text-center" />
                <InputOTPSlot index={1} className="text-center" />
                <InputOTPSlot index={2} className="text-center" />
                <InputOTPSlot index={3} className="text-center" />
              </InputOTPGroup>
            </InputOTP>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Verify
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}