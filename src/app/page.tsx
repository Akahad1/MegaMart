import Carousel from "@/components/Carousel/Carousel";
import Categories from "@/components/Categories/Categories";
import Sections from "@/components/Sections/Sections";
import Smartphones from "@/components/Smartphones/Smartphones";

export default async function Home() {
  const res = await fetch("https://bd-task-back-end.vercel.app/dailyProduct");
  const data = await res.json();
  const phone = await fetch("https://bd-task-back-end.vercel.app/products");
  const phoneData = await phone.json();

  const catagoroy = await fetch("https://bd-task-back-end.vercel.app/catgory");
  const catagoroyData = await catagoroy.json();
  console.log(catagoroyData);
  return (
    <div>
      <Carousel></Carousel>
      <Smartphones phoneData={phoneData}></Smartphones>
      <Categories catagoroyData={catagoroyData}></Categories>
      <Sections DailyProductData={data}></Sections>
    </div>
  );
}
