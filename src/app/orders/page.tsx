import { MainLayout } from "@/components/layouts";
import React from "react";

export default function OrderPage() {
  return (
    <MainLayout>
      <div className="p-4 bg-main-bg dark:bg-main-dark-bg dark:text-white flex flex-col gap-4 rounded-md">
        <div className="">
          <h1 className="mb-1 text-xl font-bold">Orders</h1>
          <p className=" text-sm md:text-base text-gray-500 dark:text-gray-400">
            All your orders
          </p>
        </div>

        <div className="p-4 bg-light-gray dark:bg-secondary-dark-bg dark:text-white rounded-md">
          <span>Nothing is here to show you</span>
        </div>
      </div>
    </MainLayout>
  );
}
