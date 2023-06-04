import { WEBSITE_API } from "@/sitedata/constants";
import { sortMenu } from "./helpers";

export const getPages = async () => {
  const response = await fetch(`${WEBSITE_API}/pages/`);
  const data = await response.json();

  const pageNavi: Page[] = [];
  data.map((page: Page) => {
    return pageNavi.push({
      id: page.id,
      title: page.title.rendered,
      slug: page.slug,
      status: page.status,
      menu_order: page.menu_order,
    });
  });

  return sortMenu(pageNavi);
};
