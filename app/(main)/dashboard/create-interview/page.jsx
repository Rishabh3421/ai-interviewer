"use client";
import { MoveLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Form from "./_components/Form";

const CreateInterview = () => {
  const router = useRouter();
  const [steps, setSteps] = useState(1);
  return (
    <div className="mt-10 px-10 md:px-24 lg:px-44 xl:px-56">
      <div className="flex gap-4 items-center">
        <span title="Go back">
          <MoveLeft
            className="cursor-pointer"
            onClick={() => router.back()}
          />
        </span>
        <h2 className="font-bold text-xl">Create New Interview</h2>
      </div>
        <Progress value={steps * 33.33} className="my-5"/>
        <Form/>
    </div>
  );
};

export default CreateInterview;
