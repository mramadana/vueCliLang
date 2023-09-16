import { createRouter, createWebHistory } from "vue-router";
import MyMain from "@/views/MyMain"
import aboutPage from '@/views/aboutPage';
import profilePage from '@/views/profilePage';
import NewRouet from '@/views/NewRouet';
// page not found
import NotFound from '@/views/NotFound';

// child route
import MyLearnings from '@/views/MyLearnings';
import MyWishlist from '@/views/MyWishlist';

const routes = [
  {
    name: "Home",
    path: "/",
    slug: 'navBar',
    component: MyMain,
    meta: {
      title: 'Home',
      descreption: 'bla bla bla',
    }
  },
  {
    name: "About",
    path: '/about',
    slug: 'navBar',
    component: aboutPage,
    meta: {
      title: 'About',
      descreption: 'bla bla bla',
    },
  },
  {
    name: "Profile",
    path: '/profile/:userId/:userName',
    slug: 'navBar',
    component: profilePage,
    meta: {
      title: 'Profile',
      descreption: 'bla bla bla',
    },
    children: [
      {
        name: "MyLearnings",
        // dont use / here
        path: 'My-Learnings',
        component: MyLearnings,
      },
      {
        name: "MyWishlist",
        // dont use / here
        path: 'My-Wishlist',
        component: MyWishlist,
      },
    ]
  },
  {
    name: "NewRouet",
    path: '/NewRouet',
    component: NewRouet,
    meta: {
      title: 'NewRouet',
      descreption: 'bla bla bla',
    },
  },

  // page not found
  {
    name: "NotFound",
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: {
      title: 'NotFound',
      descreption: 'bla bla bla',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log("to is ", to);
  // console.log("from is ", from);
  // console.log("next is ", next);

  // if(to.name == 'Profile') {
  //   return next({name: 'Home'});
  // }

  document.title = to.meta.title
  next();
})

export default router;
