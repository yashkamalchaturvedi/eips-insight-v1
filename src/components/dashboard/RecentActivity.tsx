
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activityItems = [
  {
    id: "eip-6551",
    title: "EIP-6551: Non-fungible Token Bound Accounts",
    status: "Review",
    author: "Jayden Windle",
    time: "2 hours ago",
    type: "ERC"
  },
  {
    id: "eip-7625",
    title: "EIP-7625: Path-based NFT metadata resolution",
    status: "Draft",
    author: "Levi Feldman",
    time: "5 hours ago",
    type: "ERC"
  },
  {
    id: "eip-4844",
    title: "EIP-4844: Shard Blob Transactions",
    status: "Final",
    author: "Protolambda",
    time: "1 day ago",
    type: "Core"
  },
  {
    id: "eip-7503",
    title: "EIP-7503: Empty Account Witness Format",
    status: "Last Call",
    author: "Alex Stokes",
    time: "2 days ago",
    type: "Core"
  },
  {
    id: "eip-7495",
    title: "EIP-7495: EOF - Stack Validation",
    status: "Review",
    author: "Andrei Maiboroda",
    time: "3 days ago",
    type: "Core"
  },
];

const statusColors = {
  Draft: "bg-blue-500/20 text-blue-500",
  Review: "bg-yellow-500/20 text-yellow-500",
  "Last Call": "bg-purple-500/20 text-purple-500",
  Final: "bg-green-500/20 text-green-500",
};

const typeColors = {
  Core: "bg-red-500/20 text-red-500",
  ERC: "bg-blue-500/20 text-blue-500",
  Interface: "bg-yellow-500/20 text-yellow-500",
  Networking: "bg-purple-500/20 text-purple-500",
};

export function RecentActivity() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activityItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-start space-x-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{item.id}</span>
                    <span className={`px-2 py-0.5 rounded text-xs ${typeColors[item.type as keyof typeof typeColors]}`}>
                      {item.type}
                    </span>
                  </div>
                  <h4 className="font-medium">{item.title}</h4>
                  <div className="text-xs text-muted-foreground">
                    By {item.author} • {item.time}
                  </div>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${statusColors[item.status as keyof typeof statusColors]}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
