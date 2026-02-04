// components/file-table.tsx
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MoreHorizontalIcon,
  DownloadIcon,
  FileIcon,
  FileText,
  FileSpreadsheet,
} from "lucide-react";

export interface FileItem {
  name: string;
  size: string;
  date: string;
}

interface FileTableProps {
  files: FileItem[];
  onDownload?: (file: FileItem) => void;
  onDelete?: (file: FileItem) => void;
  onEdit?: (file: FileItem) => void;
  onPreview?: (file: FileItem) => void;
}

export function FileTable({
  files,
  onDownload,
  onDelete,
  onEdit,
  onPreview,
}: FileTableProps) {
  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith(".pdf")) {
      return <FileText className="h-4 w-4 text-red-500" />;
    }
    if (fileName.endsWith(".csv")) {
      return <FileSpreadsheet className="h-4 w-4 text-green-500" />;
    }
    return <FileIcon className="h-4 w-4 text-gray-500" />;
  };

  const formatFileSize = (size: string) => {
    // Ensure consistent formatting
    return size.toUpperCase();
  };

  const formatDate = (date: string) => {
    // Ensure consistent date formatting if needed
    return date;
  };

  return (
    <div className="rounded-md ">
      <Table>
        <TableHeader>
          {/* <TableRow>
            <TableHead className="w-[50%]">Name</TableHead>
            <TableHead className="w-[20%]">Size</TableHead>
            <TableHead className="w-[20%]">Date</TableHead>
            <TableHead className="w-[10%] text-right">Actions</TableHead>
          </TableRow> */}
        </TableHeader>
        <TableBody>
          {files.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                No files found.
              </TableCell>
            </TableRow>
          ) : (
            files.map((file) => (
              <TableRow key={file.name}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {getFileIcon(file.name)}
                    <span className="truncate">{file.name}</span>
                  </div>
                </TableCell>
                <TableCell>{formatFileSize(file.size)}</TableCell>
                <TableCell>{formatDate(file.date)}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="size-8">
                        <MoreHorizontalIcon className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {onPreview && (
                        <DropdownMenuItem onClick={() => onPreview(file)}>
                          Preview
                        </DropdownMenuItem>
                      )}
                      {onDownload && (
                        <DropdownMenuItem onClick={() => onDownload(file)}>
                          <DownloadIcon className="mr-2 h-4 w-4" />
                          Download
                        </DropdownMenuItem>
                      )}
                      {onEdit && (
                        <>
                          <DropdownMenuItem onClick={() => onEdit(file)}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => onEdit(file)}>
                            Rename
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                        </>
                      )}
                      {onDelete && (
                        <DropdownMenuItem
                          variant="destructive"
                          onClick={() => onDelete(file)}
                        >
                          Delete
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
