"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import classNames from "classnames";

interface iActiveLinkProps {
  url: string;
  className?: string;
  activeClassName: string;
  children: ReactNode;
}

const ActiveLink = ({
  url,
  className,
  activeClassName,
  children,
}: iActiveLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={url}
      className={classNames(className, { [activeClassName]: pathname === url })}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
