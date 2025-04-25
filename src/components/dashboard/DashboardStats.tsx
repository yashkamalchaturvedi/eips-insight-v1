
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, FileText, GitPullRequest, Users } from "lucide-react";

const stats = [
  {
    title: "Active Proposals",
    value: "127",
    icon: FileText,
    description: "Drafts & Open EIPs",
    change: "+4.3%",
    changeDirection: "increase",
  },
  {
    title: "Pull Requests",
    value: "53",
    icon: GitPullRequest,
    description: "Pending review",
    change: "+12.5%",
    changeDirection: "increase",
  },
  {
    title: "Recent Activity",
    value: "289",
    icon: Activity,
    description: "Last 30 days",
    change: "+8.2%",
    changeDirection: "increase",
  },
  {
    title: "Contributors",
    value: "1,204",
    icon: Users,
    description: "Total community",
    change: "+2.1%",
    changeDirection: "increase",
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
            <div className={`text-xs mt-1 ${stat.changeDirection === 'increase' ? 'text-green-400' : 'text-red-400'}`}>
              {stat.change} from last month
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
