import BvnScreen from "@/pages/bvn-screen";
import InfoScreen from "@/pages/info-screen";
import OtpScreen from "@/pages/otp-screen";

export const routeConfig = [
  {
    path: "/",
    element: <BvnScreen />,
  },
  {
    path: "info",
    element: <InfoScreen />,
  },
  {
    path: "otp",
    element: <OtpScreen />,
  },
  
  
];
