import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { PARTNERS, STATES, PERIODS } from "@/data/constants"

interface ProgramGoalsProps {
  partner: string
  state: string
  period: string
  setPartner: (value: string) => void
  setState: (value: string) => void
  setPeriod: (value: string) => void
}

interface Metrics {
  programAnnualBudget: number
  noOfSchoolsInState: number
  noOfSchoolsCoveredInPlan: number
  noOfStudentsInState: number
  noOfStudentsCoveredInPlan: number
  noOfSparks: number
  noOfKitsDistributed: number
  noOfTeachersToTrained: number
  samparkTvLedDistributed: number
}

export function ProgramGoals({
  partner,
  state,
  period,
  setPartner,
  setState,
  setPeriod,
}: ProgramGoalsProps) {
  const metrics: Metrics = {
    programAnnualBudget: 500000000,
    noOfSchoolsInState: 25000,
    noOfSchoolsCoveredInPlan: 15000,
    noOfStudentsInState: 7500000,
    noOfStudentsCoveredInPlan: 4500000,
    noOfSparks: 15000000,
    noOfKitsDistributed: 45000,
    noOfTeachersToTrained: 75000,
    samparkTvLedDistributed: 20000
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-br from-orange-50 to-orange-100/50 p-6 rounded-2xl border-2 border-orange-200/60 shadow-sm">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
            Program Goals
          </h1>
          <p className="text-orange-600/80 text-lg">
            Track and monitor program objectives and milestones
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={partner} onValueChange={setPartner}>
            <SelectTrigger className="w-[180px] border-orange-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-orange-50/80 hover:border-orange-400 transition-colors">
              <SelectValue placeholder="Select Partner" />
            </SelectTrigger>
            <SelectContent>
              {PARTNERS.map((partner) => (
                <SelectItem key={partner.value} value={partner.value}>
                  {partner.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={state} onValueChange={setState}>
            <SelectTrigger className="w-[180px] border-orange-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-orange-50/80 hover:border-orange-400 transition-colors">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              {STATES.map((state) => (
                <SelectItem key={state.value} value={state.value}>
                  {state.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-[180px] border-orange-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-orange-50/80 hover:border-orange-400 transition-colors">
              <SelectValue placeholder="Select Period" />
            </SelectTrigger>
            <SelectContent>
              {PERIODS.map((period) => (
                <SelectItem key={period.value} value={period.value}>
                  {period.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Program Annual Budget Card */}
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Total Budget</p>
              <p className="text-2xl font-semibold text-orange-500">₹{metrics.programAnnualBudget.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">All Periods</p>
            </div>
          </CardContent>
        </Card>

        {/* Schools in State Card */}
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Total Schools</p>
              <p className="text-2xl font-semibold text-orange-500">{metrics.noOfSchoolsInState.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">All Periods</p>
            </div>
          </CardContent>
        </Card>

        {/* Schools Covered in Plan Card */}
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Schools Covered</p>
              <p className="text-2xl font-semibold text-orange-500">{metrics.noOfSchoolsCoveredInPlan.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">All Periods</p>
            </div>
          </CardContent>
        </Card>

        {/* Students in State Card */}
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Total Students</p>
              <p className="text-2xl font-semibold text-orange-500">{metrics.noOfStudentsInState.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">All Periods</p>
            </div>
          </CardContent>
        </Card>

        {/* Students Covered in Plan Card */}
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Students Covered</p>
              <p className="text-2xl font-semibold text-orange-500">{metrics.noOfStudentsCoveredInPlan.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">All Periods</p>
            </div>
          </CardContent>
        </Card>

        {/* Sparks Card */}
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Total Sparks</p>
              <p className="text-2xl font-semibold text-orange-500">{metrics.noOfSparks.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">All Periods</p>
            </div>
          </CardContent>
        </Card>

        {/* Kits Distributed Card */}
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Kits Distributed</p>
              <p className="text-2xl font-semibold text-orange-500">{metrics.noOfKitsDistributed.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">All Periods</p>
            </div>
          </CardContent>
        </Card>

        {/* Teachers to be Trained Card */}
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">Teachers to Train</p>
              <p className="text-2xl font-semibold text-orange-500">{metrics.noOfTeachersToTrained.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">All Periods</p>
            </div>
          </CardContent>
        </Card>

        {/* Sampark TV/LED Distributed Card */}
        <Card className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="space-y-2">
              <p className="text-gray-600 text-sm">TV/LED Distributed</p>
              <p className="text-2xl font-semibold text-orange-500">{metrics.samparkTvLedDistributed.toLocaleString()}</p>
              <p className="text-gray-500 text-sm">All Periods</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 