interface ContentObject {
  rendered: string;
  raw?: string;
}

interface Title extends ContentObject {}
interface Content extends ContentObject {}
interface Excerpt extends ContentObject {}

interface Page {
  title: PostTitle;
  slug: string;
  id: number;
  status: string;
  menu_order: number;
}

interface Pages {
  pages: Page[];
}
