import { Helmet } from "react-helmet-async";
import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { ProposalChart } from "@/components/dashboard/ProposalChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Dashboard | EIPs Insight</title>
      </Helmet>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">
            Overview of Ethereum Improvement Proposals activity
          </p>
        </div>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <ProposalChart />
          <RecentActivity />
        </div>
      </div>
    </>
  );
}
