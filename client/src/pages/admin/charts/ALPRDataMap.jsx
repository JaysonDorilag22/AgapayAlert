"use client"
import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapContainer, TileLayer, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet.heat"

const incidentData = [
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "missing", location: [14.5176, 121.0509], timestamp: "2024-01-01 08:00 AM" }, // Taguig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-06 09:00 AM" }, // Quezon City
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-07 10:00 AM" }, // Manila
  { type: "missing", location: [14.6091, 121.0223], timestamp: "2024-01-08 11:00 AM" }, // Pasig
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.6760, 121.0437], timestamp: "2024-01-09 12:00 PM" }, // Quezon City
  { type: "missing", location: [14.5547, 121.0244], timestamp: "2024-01-10 01:00 PM" }, // Makati
  { type: "missing", location: [14.5764, 121.0851], timestamp: "2024-01-11 02:00 PM" }, // Pasig
  { type: "missing", location: [14.5995, 120.9842], timestamp: "2024-01-12 03:00 PM" }, // Manila
  { type: "missing", location: [14.5794, 121.0359], timestamp: "2024-01-13 04:00 PM" }, // Mandaluyong
  { type: "missing", location: [14.5415, 121.0684], timestamp: "2024-01-14 05:00 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-02 01:20 PM" }, // Makati
  { type: "abducted", location: [14.6091, 121.0223], timestamp: "2024-01-08 02:30 PM" }, // Pasig
  { type: "abducted", location: [14.6760, 121.0437], timestamp: "2024-01-09 03:40 PM" }, // Quezon City
  { type: "abducted", location: [14.5176, 121.0509], timestamp: "2024-01-10 04:50 PM" }, // Taguig
  { type: "abducted", location: [14.5995, 120.9842], timestamp: "2024-01-11 05:00 PM" }, // Manila
  { type: "abducted", location: [14.5794, 121.0359], timestamp: "2024-01-12 06:10 PM" }, // Mandaluyong
  { type: "abducted", location: [14.5415, 121.0684], timestamp: "2024-01-13 07:20 PM" }, // Pateros
  { type: "abducted", location: [14.5547, 121.0244], timestamp: "2024-01-14 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.5764, 121.0851], timestamp: "2024-01-03 04:50 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5995, 120.9842], timestamp: "2024-01-10 05:00 PM" }, // Manila
  { type: "hit-and-run", location: [14.6760, 121.0437], timestamp: "2024-01-11 06:10 PM" }, // Quezon City
  { type: "hit-and-run", location: [14.5176, 121.0509], timestamp: "2024-01-12 07:20 PM" }, // Taguig
  { type: "hit-and-run", location: [14.5547, 121.0244], timestamp: "2024-01-13 08:30 PM" }, // Makati
  { type: "hit-and-run", location: [14.6091, 121.0223], timestamp: "2024-01-14 09:40 PM" }, // Pasig
  { type: "hit-and-run", location: [14.5794, 121.0359], timestamp: "2024-01-15 10:50 PM" }, // Mandaluyong
  { type: "hit-and-run", location: [14.5415, 121.0684], timestamp: "2024-01-16 11:00 PM" }, // Pateros
  { type: "missing", location: [14.5232, 120.9832], timestamp: "2024-11-10 06:00 AM" }, // Olongapo
  { type: "missing", location: [14.2445, 120.6021], timestamp: "2024-11-11 07:30 AM" }, // Tarlac
  { type: "missing", location: [15.1401, 120.5928], timestamp: "2024-11-12 09:00 AM" }, // Angeles City
  { type: "abducted", location: [14.7984, 121.1403], timestamp: "2024-11-13 02:00 PM" }, // Batangas
  { type: "abducted", location: [14.8835, 121.1300], timestamp: "2024-11-14 10:30 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0765, 120.5549], timestamp: "2024-11-15 03:00 PM" },
  { type: "hit-and-run", location: [14.6349, 120.9675], timestamp: "2024-11-16 11:30 AM" }, // Caloocan City
  { type: "missing", location: [14.3830, 121.0019], timestamp: "2024-11-17 08:15 AM" }, // Malolos
  { type: "abducted", location: [15.0249, 120.7360], timestamp: "2024-11-18 01:45 PM" }, // Subic
  { type: "hit-and-run", location: [14.8555, 121.1549], timestamp: "2024-11-19 02:30 PM" }, // Batangas City
  { type: "missing", location: [14.4215, 121.0405], timestamp: "2024-11-20 04:00 PM" }, // Bulacan
  { type: "abducted", location: [14.9808, 120.7601], timestamp: "2024-11-21 12:15 PM" }, // Olongapo City
  { type: "hit-and-run", location: [14.7645, 121.0793], timestamp: "2024-11-22 03:40 PM" }, // Batangas
  { type: "missing", location: [14.7349, 121.0563], timestamp: "2024-11-23 05:10 PM" }, // Lipa City
  { type: "abducted", location: [14.9451, 120.2898], timestamp: "2024-11-24 06:00 PM" }, // Bataan
  { type: "hit-and-run", location: [14.9782, 120.5264], timestamp: "2024-11-25 07:15 PM" }, // Zambales
  { type: "missing", location: [15.1104, 120.7241], timestamp: "2024-11-26 09:45 AM" }, // San Fernando City, Pampanga
  { type: "abducted", location: [14.4134, 120.5799], timestamp: "2024-11-27 11:10 AM" }, // Tarlac City
  { type: "hit-and-run", location: [15.0782, 120.5325], timestamp: "2024-11-28 04:25 PM" }, // Pampanga
  { type: "missing", location: [14.8402, 121.0165], timestamp: "2024-11-29 08:00 AM" }, // Quezon City
  { type: "abducted", location: [14.5451, 120.9833], timestamp: "2024-11-30 02:50 PM" }, // Makati
  { type: "hit-and-run", location: [14.2957, 120.5984], timestamp: "2024-12-01 05:00 PM" }, // Zambales
  { type: "missing", location: [14.4807, 120.6157], timestamp: "2024-12-02 08:30 AM" }, // Tarlac City
  { type: "abducted", location: [14.8844, 121.0503], timestamp: "2024-12-03 10:45 AM" }, // Lipa City
  { type: "hit-and-run", location: [15.0817, 120.7345], timestamp: "2024-12-04 04:00 PM" }, // San Fernando City, Pampanga
  { type: "missing", location: [14.6134, 120.9768], timestamp: "2024-12-05 11:30 AM" }, // Valenzuela City
  { type: "abducted", location: [14.3430, 121.1113], timestamp: "2024-12-06 02:10 PM" }, // Malolos
  { type: "hit-and-run", location: [14.9042, 120.5493], timestamp: "2024-12-07 01:20 PM" }, // Olongapo City
  { type: "missing", location: [14.5432, 120.6543], timestamp: "2024-12-08 07:00 PM" }, // San Pedro
  { type: "abducted", location: [14.5258, 120.7102], timestamp: "2024-12-09 05:30 PM" }, // Antipolo
  { type: "hit-and-run", location: [14.6463, 120.9833], timestamp: "2024-12-10 09:00 AM" }, // Caloocan City
  { type: "missing", location: [14.6323, 121.0071], timestamp: "2024-12-11 08:30 AM" }, // Quezon City
]

function HeatmapLayer({ points }) {
  const map = useMap();

  React.useEffect(() => {
    if (!map) return;

    const heatLayer = L.heatLayer(points, {
      radius: 25,
      blur: 15,
      gradient: { 0.4: "green", 0.65: "yellow", 1: "red" },
    }).addTo(map);

    return () => {
      if (map.hasLayer(heatLayer)) map.removeLayer(heatLayer);
    };
  }, [map, points]);

  return null;
}

function ALPRDataMap() {
  const heatmapPoints = incidentData.map((data) => {
    let intensity;
    switch (data.type) {
      case "missing":
        intensity = 0.4; // Green
        break;
      case "abducted":
        intensity = 0.65; // Yellow
        break;
      case "hit-and-run":
        intensity = 1; // Red
        break;
      default:
        intensity = 0.5; // Default intensity
    }
    return [...data.location, intensity];
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Incident Heatmap</CardTitle>
        <CardDescription>Geographic location of incidents</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-[300px]">
        <div style={{ height: "285px", width: "100%" }}>
          <MapContainer
            center={[14.5995, 121.0366]} // Default center (Metro Manila)
            zoom={10}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <HeatmapLayer points={heatmapPoints} />
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
}

export default ALPRDataMap;