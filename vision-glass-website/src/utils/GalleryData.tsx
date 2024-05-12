import frameless from "../assets/images/frameless1.png";

export type CategoryKeys =
  | "All categories"
  | "Showers"
  | "Windows"
  | "Custom Glass";

export const categories: Record<CategoryKeys, string[]> = {
  "All categories": [frameless, "shower1.png", "window1.png"],
  Showers: ["shower1.png", "shower2.png"],
  Windows: ["window1.png", "window2.png"],
  "Custom Glass": ["custom1.png", "custom2.png"],
};
