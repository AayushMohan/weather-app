"use client";
import { Card, Divider, Subtitle, Text } from "@tremor/react";

export default function Home() {
  return (
    <main className="">
      <Card>
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by Next.js 13.3, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>
      </Card>
    </main>
  );
}
