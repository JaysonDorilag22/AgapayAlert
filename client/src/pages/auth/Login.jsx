import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import { useTheme } from "@/components/theme-provider";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { login } from "@/redux/actions/authActions";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userInfo, role, error, loading } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(login(email, password));
    console.log("Login successful", userInfo);
  };

  useEffect(() => {
    if (userInfo) {
      toast({ type: "success", message: "Login successful" });
      if (role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/user-home");
      }
    }
    if (error) {
      toast({ type: "error", message: error });
    }
  }, [userInfo, role, error, navigate, toast]);

  return (
    <div className="flex items-center justify-center py-28">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <img
            src={theme === "dark" ? logo4 : logo3}
            alt="Logo"
            className="w-10 h-10 text-center mx-auto mb-3"
          />
          <CardTitle className="text-4xl text-center font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link to="#" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
              <Button variant="outline" className="w-full" disabled={loading}>
                Login with Google
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}