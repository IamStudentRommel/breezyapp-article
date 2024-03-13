"use client";
import Landing from "./components/landing";
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Page = () => {
  return (
    <main className="bg-black text-white">
      <Landing />
    </main>
  );
};

export default Page;
