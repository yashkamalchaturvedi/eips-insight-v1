
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", Core: 11, ERC: 18, Interface: 7, Networking: 4 },
  { name: "Feb", Core: 15, ERC: 12, Interface: 8, Networking: 6 },
  { name: "Mar", Core: 9, ERC: 15, Interface: 10, Networking: 5 },
  { name: "Apr", Core: 13, ERC: 20, Interface: 12, Networking: 3 },
  { name: "May", Core: 17, ERC: 13, Interface: 9, Networking: 7 },
  { name: "Jun", Core: 14, ERC: 10, Interface: 8, Networking: 4 },
];

export function ProposalChart() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Proposal Activity</CardTitle>
        <CardDescription>New proposals by category over time</CardDescription>
      </CardHeader>
      <CardContent className="pl-0">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} />
            <YAxis stroke="#94a3b8" fontSize={12} />
            <Tooltip 
              contentStyle={{ backgroundColor: "#0f172a", border: "1px solid #1e293b", borderRadius: "0.5rem" }}
              labelStyle={{ color: "#e2e8f0" }}
            />
            <Bar dataKey="Core" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="ERC" fill="#10B981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Interface" fill="#F59E0B" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Networking" fill="#6366F1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
