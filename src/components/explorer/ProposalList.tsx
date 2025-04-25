
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const proposals = [
  {
    id: "EIP-6963",
    title: "Multi Injected Provider Discovery",
    type: "Interface",
    status: "Final",
    author: "Gabriel Gruber, Nathan Handler",
    created: "2023-05-01",
  },
  {
    id: "EIP-7590",
    title: "ENS Separate Resolution and Ownership",
    type: "ERC",
    status: "Draft",
    author: "Nick Johnson, Karim Aguenab",
    created: "2024-02-27",
  },
  {
    id: "EIP-7631",
    title: "Solidity Bytecode Verification Standard",
    type: "ERC",
    status: "Review",
    author: "Conor Svensson, Karel Mistrikian",
    created: "2024-03-18",
  },
  {
    id: "EIP-4844",
    title: "Shard Blob Transactions",
    type: "Core",
    status: "Final",
    author: "Protolambda, Dankrad Feist, et al.",
    created: "2022-02-25",
  },
  {
    id: "EIP-7212",
    title: "Precompiled for secp256r1 Curve Support",
    type: "Core",
    status: "Review",
    author: "Ulaş Erdoğan, Muhammed Emin Aydın",
    created: "2023-06-18",
  },
  {
    id: "EIP-6404",
    title: "SSZ Receipts",
    type: "Core",
    status: "Review",
    author: "Etan Kissling",
    created: "2023-01-11",
  },
  {
    id: "EIP-7566",
    title: "Smart Contract Anti-patterns Registry",
    type: "Informational",
    status: "Draft",
    author: "Gabriel Gruber, Adrián Calvo",
    created: "2024-02-22",
  }
];

const statusColors = {
  Draft: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
  Review: "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30",
  "Last Call": "bg-purple-500/20 text-purple-500 hover:bg-purple-500/30",
  Final: "bg-green-500/20 text-green-500 hover:bg-green-500/30",
};

const typeColors = {
  Core: "bg-red-500/20 text-red-500 hover:bg-red-500/30",
  ERC: "bg-blue-500/20 text-blue-500 hover:bg-blue-500/30",
  Interface: "bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30",
  Networking: "bg-purple-500/20 text-purple-500 hover:bg-purple-500/30",
  Informational: "bg-gray-500/20 text-gray-400 hover:bg-gray-500/30",
};

export function ProposalList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Type</TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden lg:table-cell">Author</TableHead>
            <TableHead className="hidden lg:table-cell">Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {proposals.map((proposal) => (
            <TableRow key={proposal.id}>
              <TableCell className="font-medium">{proposal.id}</TableCell>
              <TableCell>
                {proposal.title}
                <div className="md:hidden flex space-x-2 mt-1">
                  <Badge
                    variant="secondary"
                    className={
                      typeColors[proposal.type as keyof typeof typeColors]
                    }
                  >
                    {proposal.type}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className={
                      statusColors[proposal.status as keyof typeof statusColors]
                    }
                  >
                    {proposal.status}
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge
                  variant="secondary"
                  className={
                    typeColors[proposal.type as keyof typeof typeColors]
                  }
                >
                  {proposal.type}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge
                  variant="secondary"
                  className={
                    statusColors[proposal.status as keyof typeof statusColors]
                  }
                >
                  {proposal.status}
                </Badge>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                {proposal.author.length > 20
                  ? `${proposal.author.substring(0, 20)}...`
                  : proposal.author}
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                {proposal.created}
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="outline" asChild>
                  <Link to={`/proposal/${proposal.id.toLowerCase()}`}>View</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
