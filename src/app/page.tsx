import { Container, Filters, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text={"Все пиццы"} size="lg" className="font-extrabold"></Title>
      </Container> 
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[60px]">
          
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              Список товаров
            </div>
          </div>
 
        </div>
      </Container>
    </>
  );
}
