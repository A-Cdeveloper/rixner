import { WEBSITE_API } from "@/sitedata/constants";

export const getSinglePage = async (page_id: number) => {
  const response = await fetch(`${WEBSITE_API}/pages/${page_id}`);
  const data = await response.json();
  return data;
};
