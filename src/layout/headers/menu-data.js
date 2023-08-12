const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Home",
    link: "/",
    sub_menus: [
      { link: "/", title: "Main Home" },
      { link: "/home-2", title: "It Solutions" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Shop",
    link: "/shop",
    sub_menus: [
      { link: "/shop", title: "Shop" },
      { link: "/shop-details", title: "Shop Details" },
    ],
  },
  {
    id: 4,
    mega_menu: true,
    has_dropdown: true,
    pages:true,
    title: "Pages",
    link: "#",
    mega_menus: [
      // layout 01
      {
        link: "#",
        title: "About Us",
        layout: [
          { link: "/about-me", title: "About Us" },
        ],
      },
      // layout 02
      {
        link: "#",
        title: "Services",
        layout: [
          { link: "/service", title: "Service v.1" },
          { link: "/service-details", title: "Service Details" },
          { link: "/faq", title: "Faq Page" },
        ],
      },
      // layout 03
      {
        link: "#",
        title: "portfolio",
        layout: [
          { link: "/portfolio", title: "Portfolio v.1" },
          { link: "/portfolio-details", title: "portfolio details" },
        ],
      },
      // layout 04
      {
        link: "#",
        title: "Team",
        layout: [
          { link: "/team", title: "Team" },
          { link: "/team-details", title: "Team Details" },
          { link: "/job", title: "Job" },
          { link: "/job-details", title: "job details" },
        ],
      },
      // layout 05
      {
        link: "#",
        title: "Help",
        layout: [
          { link: "/price", title: "Price & Plans" },
          { link: "/privacy-policy", title: "privacy policy" },
          { link: "/terms", title: "Terms & Condition" },
          { link: "/help", title: "Help Center" },
        ],
      },
      // layout 06
      {
        link: "#",
        title: "Shop",
        layout: [
          { link: "/search", title: "Search Results" },
          { link: "/contact", title: "Contact" },
          { link: "/shop", title: "Shop" },
        ],
      },
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/blog",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-list", title: "Blog List" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
];
export default menu_data;
