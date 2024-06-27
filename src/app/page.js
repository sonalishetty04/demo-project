import { Button } from "@/components/ui/button";
import HomeSlider from "@/components/HomeSlider";
import ServicesSlider from "@/components/ServicesSlider";
import HealthPackages from "@/components/HealthPackages";

export default function Home() {
  return (
    <div className="h-full overflow-y-auto ">
      <HomeSlider />

      <ServicesSlider />

      <HealthPackages />
    </div>
  );
}
