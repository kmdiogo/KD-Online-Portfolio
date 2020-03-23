import AboutMe from "../../views/AboutMe";
import Skills from "../../views/Skills";
import Experience from '../../views/Experience'

// Ensure the order of the component matches its respective route object
// Components are not tied to their objects so non-route related modules can import the rootRoutes
// NOTE: the order is also important with respect to how the in-app file viewer will order
// the pages
const personalRouteComponents = [
    AboutMe, Skills, Experience
];
const personalRoutes = [
    {
        path: '/AboutMe',
        meta: {
            label: 'AboutMe.html',
            icon: 'fas fa-file-code',
            iconColor: 'darkorange',
        }
    },
    {
        path: '/Skills',
        meta: {
            label: 'Skills.html',
            icon: 'fas fa-file-code',
            iconColor: 'darkorange',
        }
    },
    {
        path: '/Experience',
        meta: {
            label: 'Experience.html',
            icon: 'fas fa-file-code',
            iconColor: 'darkorange',
        }
    }
];

personalRoutes.forEach(route => {
    route.name = route.meta.label
});

export { personalRoutes, personalRouteComponents }
