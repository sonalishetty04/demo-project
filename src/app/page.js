import HomeSlider from "@/components/HomeSlider";
import HealthPackages from "@/components/HealthPackages";
import Services from "@/components/Services";
import ConsultationBanner from "@/components/ConsultationBanner";
import AppointmentBanner from "@/components/AppointmentBanner";
import ConsultDoctors from "@/components/ConsultDoctors";
import ChooseManipal from "@/components/ChooseManipal";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="h-full overflow-y-auto ">
      <HomeSlider />

      <Services />
      {/* <HealthPackages /> */}
      <ConsultationBanner />
      <ConsultDoctors />
      <AppointmentBanner />
      <ChooseManipal />
      <HowItWorks />
    </div>
  );
}
