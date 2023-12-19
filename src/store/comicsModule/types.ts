// import type { Comic } from "@/views/comicsInterfaces";
import type { Comic } from "../../views/comicsInterfaces";

export interface ComicsState {
  comics: Comic[] | null;
  page: number | null;
  filter: string | null;
  search: string | null;
  total: number | null;
}
