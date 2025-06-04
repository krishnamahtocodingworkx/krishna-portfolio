import React from "react";

export interface NavItemType {
  name: string;
  link: string;
  icon: React.ReactNode;
}
export interface GridItemType {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  // header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  imageClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}
