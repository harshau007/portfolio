import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description: string | readonly (string | undefined)[];
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  return (
    <Link href={href || "#"} target="_blank" className="block cursor-pointer">
      <Card className="flex flex-col sm:flex-row">
        <div className="flex-none">
          <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className={`object-contain ${
                altText.toLowerCase().match("hireintel.ai") ? "bg-black" : ""
              }`}
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow ml-4 mt-2 sm:mt-0 items-center flex-col group">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                <ChevronRightIcon className="size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100" />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && (
              <div className="font-sans text-xs mt-1">{subtitle}</div>
            )}
            {badges && (
              <div className="mt-1 flex flex-wrap gap-1">
                {badges.map((badge, index) => (
                  <Badge
                    variant="secondary"
                    className="align-middle text-xs"
                    key={index}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </CardHeader>
          <CardContent className="mt-2 text-xs sm:text-sm">
            {typeof description === "string" ? (
              <p>{description}</p>
            ) : (
              description && (
                <ul className="list-disc ml-4">
                  {description.map((item, index) => (
                    <li key={index} className="mt-1">
                      {item}
                    </li>
                  ))}
                </ul>
              )
            )}
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};
