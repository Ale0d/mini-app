import { SVGProps } from "react";

export interface IconButton extends SVGProps<SVGSVGElement> {
  fill?: string;
  width?: number;
  height?: number;
}
