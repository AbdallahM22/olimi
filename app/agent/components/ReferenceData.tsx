import { FileItem, FileTable } from "@/components/ui/files-table";
import SectionInfo from "./SectionInfo";
import { Button } from "@/components/ui/button";
import { ArrowUpToLine, Upload } from "lucide-react";

const sampleFiles: FileItem[] = [
  { name: "pink_printz.pdf", size: "7.6MB", date: "06 Aug, 2025" },
  { name: "transfer_sheets.csv", size: "7.6MB", date: "16 Sep, 2025" },
  { name: "ref_alliance.pdf", size: "7.6MB", date: "22 May, 2025" },
];
const ReferenceData = () => {
  return (
    <div className="lg:flex justify-between gap-12">
      <section className="lg:w-[35%] max-lg:mb-3" id="package-information">
        <SectionInfo
          title="Reference Data"
          description="Enhance your agent's knowledge base by uploading 
                        relevant documents allowing the agent to provide 
                        more accurate and expert responses to users."
        />
      </section>
      <div className="lg:flex-1 space-y-4">
        <FileTable files={sampleFiles} />
        <Button>
          <ArrowUpToLine /> Upload
        </Button>
      </div>
    </div>
  );
};

export default ReferenceData;
