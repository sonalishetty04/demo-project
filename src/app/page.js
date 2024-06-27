import HomeSlider from "@/components/HomeSlider";
import HealthPackages from "@/components/HealthPackages";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="h-full overflow-y-auto ">
      <HomeSlider />

      <Services />
      <HealthPackages />
    </div>
  );
}
