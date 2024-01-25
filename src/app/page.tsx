"use client";
import { ButtonCard, EarningCard } from "@/components/home/Card";
import { MainLayout } from "@/components/layouts";
import { BUTTON_CARDS } from "@/data";
import useTheme from "@/hooks/useTheme";

export default function HomePage() {
  // const { theme } = useTheme();

  return (
    <>
      <MainLayout className="p-2 md:p-4 lg:p-8 flex flex-col gap-10">
        {/* top cards */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4">
          <EarningCard />

          {BUTTON_CARDS.map((item) => (
            <ButtonCard {...item} key={item.name} />
          ))}
        </div>
      </MainLayout>
    </>
  );
}
