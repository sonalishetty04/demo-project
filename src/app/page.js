import HomeSlider from "@/components/HomeSlider";
import HealthPackages from "@/components/HealthPackages";
import Services from "@/components/Services";
import ConsultationBanner from "@/components/ConsultationBanner";
import AppointmentBanner from "@/components/AppointmentBanner";
import ConsultDoctors from "@/components/ConsultDoctors";
import ChooseManipal from "@/components/ChooseManipal";
import HowItWorks from "@/components/HowItWorks";
import EmergencyContact from "@/components/EmergencyContact";

export default function Home() {
  return (
    <div>
      <HomeSlider />

      <Services />
      {/* <HealthPackages /> */}
      <ConsultationBanner />
      <ConsultDoctors />
      <AppointmentBanner />
      <ChooseManipal />
      <HowItWorks />
      <EmergencyContact />
    </div>
  );
}
