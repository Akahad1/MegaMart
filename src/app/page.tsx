import Carousel from "@/components/Carousel/Carousel";
import Sections from "@/components/Sections/Sections";

export default async function Home() {
  const res = await fetch("https://bd-task-back-end.vercel.app/dailyProduct");
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <Carousel></Carousel>
      <Sections DailyProductData={data}></Sections>
    </div>
  );
}
