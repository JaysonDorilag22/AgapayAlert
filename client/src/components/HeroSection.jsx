import { Button } from "@/components/ui/button";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { theme } = useTheme();
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden lg:py-20 flex justify-center items-center">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <motion.img
              src={theme === "dark" ? logo4 : logo3}
              alt="Logo"
              className="w-32 h-32 text-center mx-auto mb-3"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Help Us Find Missing Persons, One Alert at a Time.
            </motion.p>
            <motion.h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              AgapayAlert
            </motion.h1>
            <motion.p
              className="mt-3 text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              A System for Rapid Response to Abduction, Kidnapping, Missing
              Persons, and Hit-and-Run Incidents.
            </motion.p>
          </div>
          <motion.div
            className="mt-8 gap-3 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <Button size={"lg"}>Report Now</Button>
            <Button size={"lg"} variant={"outline"}>
              Get Alerts
            </Button>
          </motion.div>
          <motion.div
            className="mt-10 relative max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.5 }}
          >
            <img
              src="https://placehold.co/1024x480"
              className="rounded-xl"
              alt="Image Description"
            />
            <div className="absolute bottom-12 -start-20 -z-[1] w-48 h-48 bg-gradient-to-b from-primary-foreground via-primary-foreground to-background p-px rounded-lg">
              <div className="w-48 h-48 rounded-lg bg-background/10" />
            </div>
            <div className="absolute -top-12 -end-20 -z-[1] w-48 h-48 bg-gradient-to-t from-primary-foreground via-primary-foreground to-background p-px rounded-full">
              <div className="w-48 h-48 rounded-full bg-background/10" />
            </div>
          </motion.div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}