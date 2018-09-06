import Welcome from "container/Routing/Welcome";
import Signup from "container/Routing/Signup";
import Feature from "container/Routing/Feature";
import Signout from "container/Routing/Signout";
import Signin from "container/Routing/Signin";

const routing_index = [
    {
        path: '/',
        component: Welcome,
        exact: true
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/feature',
        component: Feature
    },
    {
        path: '/signout',
        component: Signout
    },
    {
        path: '/signin',
        component: Signin
    }
];

export default routing_index;