import {
  BiArea,
  BiBarChart,
  BiColor,
  BiEdit,
  BiPieChart,
} from "react-icons/bi";
import {
  BsBarChart,
  BsBox,
  BsCalendar,
  BsCart,
  BsGraphUp,
  BsKanban,
  BsLine,
  BsPeople,
  BsPeopleFill,
  BsRepeat,
  BsShop,
} from "react-icons/bs";

export const MEDIUM_SCREEN_SIZE = 768;

export const THEME_OPTIONS = ["dark", "light"];
export const THEME_COLORS = [
  "blue",
  "orange",
  "pink",
  "yellow",
  "green",
  "sky",
];

export const SIDEBAR_MENUS = [
  {
    name: "dashboard",
    links: [{ name: "Ecommerce", Icon: BsShop, href: "/" }],
  },
  {
    name: "pages",
    links: [
      { name: "Orders", Icon: BsCart, href: "/orders" },
      { name: "Employes", Icon: BsPeopleFill, href: "/employes" },
      { name: "Customers", Icon: BsPeople, href: "/customers" },
    ],
  },
  {
    name: "apps",
    links: [
      { name: "Calendar", Icon: BsCalendar, href: "/calendar" },
      { name: "Kanban", Icon: BsKanban, href: "/kanban" },
      { name: "Editor", Icon: BiEdit, href: "/editor" },
      { name: "Color Picker", Icon: BiColor, href: "/color-picker" },
    ],
  },
  {
    name: "charts",
    links: [
      { name: "Line", Icon: BsLine, href: "/line" },
      { name: "Area", Icon: BiArea, href: "/area" },
      { name: "Bar", Icon: BiBarChart, href: "/bar" },
      { name: "Pie", Icon: BiPieChart, href: "/pie" },
      { name: "Financial", Icon: BsGraphUp, href: "/financial" },
    ],
  },
];

export const BUTTON_CARDS = [
  {
    name: "Custommers",
    Icon: BsPeople,
    ammount: "39,254",
    percent: 4,
    increase: false,
    color: "blue",
  },
  {
    name: "Products",
    Icon: BsBox,
    ammount: "4,395",
    percent: 25,
    increase: true,
    color: "yellow",
  },
  {
    name: "Sales",
    Icon: BsBarChart,
    ammount: "423,39",
    percent: 30,
    increase: true,
    color: "pink",
  },
  {
    name: "Refunds",
    Icon: BsRepeat,
    ammount: "39,353",
    percent: 12,
    increase: false,
    color: "green",
  },
];
