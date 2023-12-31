import axios from "axios";
import { setupCache } from "axios-cache-adapter";

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
  exclude: {
    query: false,
  },
});

const loremPicsum = axios.create({
  baseURL: "https://picsum.photos/v2/list",
  adapter: cache.adapter,
});

export default loremPicsum;
