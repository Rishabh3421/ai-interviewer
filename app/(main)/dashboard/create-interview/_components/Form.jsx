import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import {
  Code,
  User,
  Brain,
  BadgeCheck,
  Users,
  Puzzle,
  ArrowBigRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const interviewTypes = [
  { label: "Technical", value: "technical", icon: Code },
  { label: "Fresher", value: "fresher", icon: User },
  { label: "Behaviour", value: "behaviour", icon: Users },
  { label: "Experienced", value: "experienced", icon: BadgeCheck },
  { label: "Problem Solving", value: "problem-solving", icon: Brain },
  { label: "Reasoning", value: "reasoning", icon: Puzzle },
];

const durations = [
  { label: "15 minutes", value: "15" },
  { label: "30 minutes", value: "30" },
  { label: "1 hour", value: "60" },
  { label: "1.5 hours", value: "90" },
  { label: "2 hours", value: "120" },
];

const Form = () => {
  return (
    <div className="p-6 bg-[#FAFAFA] border border-gray-200 rounded-xl shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800 mb-6 font-sans">Interview Details</h1>

      {/* Job Role */}
      <div className="mb-5">
        <label htmlFor="jobRole" className="block text-md font-medium font-sans text-gray-700 mb-1">
          Job Role
        </label>
        <Input
          id="jobRole"
          type="text"
          placeholder="e.g. Software Engineer"
          className="bg-white"
        />
      </div>

      {/* Job Description */}
      <div className="mb-5">
        <label htmlFor="jobDescription" className="block text-md font-medium font-sans text-gray-700 mb-1">
          Job Description
        </label>
        <Textarea
          id="jobDescription"
          placeholder="Write a brief description of the job role..."
          className="bg-white min-h-[150px]"
        />
      </div>

      {/* Interview Duration */}
      <div className="mb-5">
        <label className="block text-md font-medium font-sans text-gray-700 mb-1">
          Interview Duration
        </label>
        <Select>
          <SelectTrigger className="bg-white w-full">
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            {durations.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Interview Type */}
      <div>
        <label className="block text-md font-medium font-sans text-gray-700 mb-1">
          Interview Type
        </label>
        <Select>
          <SelectTrigger className="bg-white w-full">
            <SelectValue placeholder="Select interview type" />
          </SelectTrigger>
          <SelectContent>
            {interviewTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                <div className="flex items-center gap-2">
                  <type.icon size={16} /> {type.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end mt-5">
        <Button className="flex items-center gap-2 font-sans font-medium text-white bg-primary hover:bg-purple-400 cursor-pointer">
          Generate Questions
          <ArrowBigRight size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Form;
