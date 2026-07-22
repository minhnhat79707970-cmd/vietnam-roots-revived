import { defineMcp } from "@lovable.dev/mcp-js";
import listHeritages from "./tools/list-heritages";
import getHeritage from "./tools/get-heritage";
import listRegions from "./tools/list-regions";
import getRegion from "./tools/get-region";
import searchHeritages from "./tools/search-heritages";

export default defineMcp({
  name: "hon-viet-mcp",
  title: "Hồn Việt — Vietnamese Heritage",
  version: "0.1.0",
  instructions:
    "Tools for the Hồn Việt app — Vietnamese cultural and natural heritage, history, and the three cultural regions (North / Central / South). Use `list_heritages` or `search_heritages` to discover entries, then `get_heritage` for full detail. Use `list_regions` and `get_region` for region-level context (geography, tangible/intangible heritages, cuisine, landmarks). All data is public.",
  tools: [listHeritages, searchHeritages, getHeritage, listRegions, getRegion],
});