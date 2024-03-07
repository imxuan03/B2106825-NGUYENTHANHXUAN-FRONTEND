import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "contactbook",
        component: () => import("@/views/ContactBook.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/contacts/:id",
        name: "contact.edit",
        component: () => import("@/views/ContactEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/contacts/create",
        name: "contact.add",
        component: () => import("@/views/CreateContact.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;