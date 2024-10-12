import { Button } from "@/components/ui/button";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MAP_TILE_URL, MAP_ATTRIBUTION } from "@/lib/maps";

const policeStations = [
  { position: [14.5176, 121.0509], name: "Taguig Police Station 1" },
  { position: [14.5246, 121.0437], name: "Taguig Police Station 2" },
  { position: [14.5336, 121.0537], name: "Taguig Police Station 3" },
  { position: [14.5200, 121.0450], name: "Taguig Police Station 4" },
  { position: [14.5300, 121.0480], name: "Taguig Police Station 5" },
  { position: [14.5250, 121.0550], name: "Taguig Police Station 6" },
  { position: [14.5150, 121.0600], name: "Taguig Police Station 7" },
  { position: [14.5100, 121.0500], name: "Taguig Police Station 8" },
  { position: [14.5350, 121.0400], name: "Taguig Police Station 9" },
  { position: [14.5400, 121.0350], name: "Taguig Police Station 10" },
  { position: [14.5450, 121.0300], name: "Taguig Police Station 11" },
  { position: [14.5500, 121.0250], name: "Taguig Police Station 12" },
  { position: [14.5550, 121.0200], name: "Taguig Police Station 13" },
  { position: [14.5600, 121.0150], name: "Taguig Police Station 14" },
  { position: [14.5650, 121.0100], name: "Taguig Police Station 15" },
];

// Create a custom icon using logo3
const customIcon = new L.Icon({
  iconUrl: logo3,
  iconSize: [24, 24], // Adjust the size as needed
  iconAnchor: [12, 24], // Adjust the anchor as needed
  popupAnchor: [0, -24], // Adjust the popup anchor as needed
});

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
            <MapContainer
              center={[14.5176, 121.0509]}
              zoom={13}
              className="h-96 rounded-xl"
            >
              <TileLayer
                url={MAP_TILE_URL}
                attribution={MAP_ATTRIBUTION}
              />
              {policeStations.map((station, index) => (
                <Marker key={index} position={station.position} icon={customIcon}>
                  <Popup>{station.name}</Popup>
                </Marker>
              ))}
            </MapContainer>
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