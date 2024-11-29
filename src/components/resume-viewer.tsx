"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, File, X } from "lucide-react";
import { useState } from "react";

interface ModalViewerProps {
  title: string;
  description?: string;
  filePath: string;
  fileType: "image" | "pdf";
  pdfOptions?: {
    showPrintButton?: boolean;
    showFullscreenButton?: boolean;
  };
}

export function ResumeViewer({
  title,
  description,
  filePath,
  fileType,
  pdfOptions,
}: ModalViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <File className="size-4" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div className="mt-4 p-6 pt-0">
          {fileType === "image" ? (
            <img
              src={filePath}
              alt={title}
              className="w-full h-auto object-contain"
              style={{ maxHeight: "calc(90vh - 120px)" }}
            />
          ) : (
            <div className="relative" style={{ height: "calc(90vh - 120px)" }}>
              <iframe
                src={`${filePath}#view=FitH&zoom=page-width&toolbar=0&navpanes=0&scrollbar=0`}
                title={title}
                className="w-full h-full"
              />
            </div>
          )}
        </div>
        <div
          className="absolute p-5 bottom-4 right-4 group hidden sm:block"
          role="button"
          onClick={handleDownload}
          onKeyDown={(e) => e.key === "Enter" && handleDownload()}
          tabIndex={0}
          aria-label="Download PDF"
        >
          <div className="flex items-center border bg-primary text-primary-foreground rounded-full p-2 transition-all duration-300 ease-in-out group-hover:pr-3 group-hover:pl-3">
            <Download className="h-5 w-5" />
            <span className="overflow-hidden max-w-0 group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 ease-in-out">
              Download
            </span>
          </div>
        </div>
        <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
