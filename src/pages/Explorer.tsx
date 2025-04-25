import { Helmet } from "react-helmet-async";
import { FilterBar } from "@/components/explorer/FilterBar";
import { ProposalList } from "@/components/explorer/ProposalList";

export default function Explorer() {
  return (
    <>
      <Helmet>
        <title>Proposal Explorer | EIPs Insight</title>
      </Helmet>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Proposal Explorer</h2>
          <p className="text-muted-foreground">
            Browse and search through Ethereum Improvement Proposals
          </p>
        </div>
        
        <FilterBar />
        <ProposalList />
      </div>
    </>
  );
}
