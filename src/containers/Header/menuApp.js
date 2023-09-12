export const adminMenu = [
  // System
  {
    name: "menu.system",
    menus: [
      { name: "menu.system-manage.react-manage", link: "/system/user-manage" },
      { name: "menu.system-manage.redux-manage", link: "/system/crud-redux" },
      {
        name: "menu.system-manage.admin-manage",
        link: "/system/manage-admin",
      },
      {
        name: "menu.system-manage.doctor-manage",
        link: "/system/manage-doctor",
        // subMenus: [
        //   {
        //     name: "menu.system-manage.doctor-manage",
        //     link: "/system/user-manage",
        //   },
        //   {
        //     name: "menu.system-manage.doctor-manage",
        //     link: "/system/user-redux",
        //   },
        // ],
      },
      {
        name: "menu.system-manage.patient-manage",
        link: "/system/manage-patient",
      },
      {
        name: "menu.system-manage.schedule-manage",
        link: "/system/manage-schedule",
      },
      {
        name: "menu.system-manage.doctor-info",
        link: "/system/doctor-info",
      },
      // subMenus: [
      //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
      //     { name: 'menu.system.system-administrator.product-manage', link: '/system/user-redux' },
      // ]
    ],
  },
  // Clinic
  {
    name: "menu.clinic",
    menus: [
      { name: "menu.clinic-manage.clinic-manage", link: "/system/user-manage" },
    ],
  },
  {
    name: "menu.speciality",
    menus: [
      {
        name: "menu.speciality-manage.speciality-manage",
        link: "/system/user-manage",
      },
    ],
  },
  {
    name: "menu.handbook",
    menus: [
      {
        name: "menu.handbook-manage.handbook-manage",
        link: "/system/user-manage",
      },
    ],
  },
];
