const adminPaths = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    element: "Admindashboard",
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: "Create Admin",
      },
      {
        name: "Create faculty",
        path: "/admin/create-faculty",
        element: "Create faculty",
      },
      {
        name: "Create Student",
        path: "/admin/create-student",
        element: "Create student",
      },
    ],
  },
];


const newArray = adminPaths.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element
    });
  }

  if(item.children){
    item.children.forEach(child=>{
        acc.push({
            path: child.path,
            element: child.element
        })
    })
  }

  return acc;
}, []);

console.log(newArray);