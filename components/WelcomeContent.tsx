"use client";

import { Card, CardContent } from "@/components/ui/card";
import { STATES, PARTNERS } from "@/data/constants";

interface WelcomeContentProps {
  filteredData: {
    budget: number;
    schools: number;
    students: number;
    teachers: number;
  };
  metrics: {
    budget: {
      total: number;
      utilized: number;
      remaining: number;
    };
    schools: {
      total: number;
      urban: number;
      rural: number;
    };
    students: {
      total: number;
      male: number;
      female: number;
    };
    teachers: {
      total: number;
      trained: number;
      pending: number;
    };
  };
  partner: string;
  state: string;
}

export default function WelcomeContent({ 
  filteredData, 
  metrics, 
  partner, 
  state 
}: WelcomeContentProps) {
  return (
    <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-2 border-orange-200/60 shadow-sm">
      <CardContent className="pt-6">
        <div className="max-w-none mx-auto">
          <div className="prose prose-orange w-full text-gray-700">
            {/* <h2 className="text-2xl font-semibold text-orange-700 mb-4">Program Overview</h2> */}
            
            <p className="mb-4 text-lg leading-relaxed">
              The National Excellence in Unified School Education System (NEXUSES) program is currently being implemented by {PARTNERS.find(p => p.value === partner)?.label || 'EduTech Foundation'} across several states in India. Currently, our flagship programs in {STATES.find(s => s.value === state)?.label || 'Delhi'} have allocated a budget of <span className="font-semibold text-orange-700">${filteredData.budget.toLocaleString()}</span>, reaching <span className="font-semibold text-blue-700">{filteredData.schools.toLocaleString()} schools</span>, <span className="font-semibold text-emerald-700">{filteredData.students.toLocaleString()} students</span>, and training <span className="font-semibold text-purple-700">{filteredData.teachers.toLocaleString()} teachers</span>.
            </p>
            
            <p className="mb-4 text-lg leading-relaxed">
              Our program focuses on four main pillars: teacher training, learning materials distribution, infrastructure development, and quality monitoring. Through these interventions, we are working to bridge the digital divide and improve educational outcomes across both urban and rural areas of {STATES.find(s => s.value === state)?.label || 'Delhi'}.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed">
              With approximately {metrics.students.male.toLocaleString()} male students and {metrics.students.female.toLocaleString()} female students, our program ensures gender-inclusive education. We have successfully trained {metrics.teachers.trained.toLocaleString()} teachers so far, with an additional {metrics.teachers.pending.toLocaleString()} teachers scheduled for upcoming training sessions.
            </p>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-orange-200 mb-6">
              <h3 className="text-xl font-semibold text-orange-600 mb-2">Quick Facts</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">Budget Utilization:</span> ${metrics.budget.utilized.toLocaleString()} ({Math.round((metrics.budget.utilized / metrics.budget.total) * 100)}% of allocated funds)</li>
                <li><span className="font-medium">School Distribution:</span> {metrics.schools.urban.toLocaleString()} urban and {metrics.schools.rural.toLocaleString()} rural schools</li>
                <li><span className="font-medium">Educational Focus:</span> Elementary (40%), Middle School (30%), and High School (30%)</li>
                <li><span className="font-medium">Teacher Specializations:</span> Mathematics (30%), Science (25%), Languages (25%), and Social Studies (20%)</li>
              </ul>
            </div>
            
            <p className="text-lg leading-relaxed">
              Through continued investment and partnership with {PARTNERS.find(p => p.value === partner)?.label || 'EduTech Foundation'}, we aim to expand our reach to more schools and provide quality education to all students, regardless of their socioeconomic background or geographic location.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 