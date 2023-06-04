export const sortMenu = (arr: Page[]) => {
  return arr.sort((a, b) => (a.menu_order > b.menu_order ? 1 : -1));
};
