export interface Pill {
  id: number;
  name: string;
  slot: string;
  color: string;
  status: "done" | "skipped" | "pending";
  takenAt: string | null;
}