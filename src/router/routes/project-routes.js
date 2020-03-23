import LAG from '../../views/Projects/LAG'
import GeneticFB from '../../views/Projects/GeneticFB'
import TAC from '../../views/Projects/TAC'
import Trivialize from "../../views/Projects/Trivialize";
import Ext2EC from "../../views/Projects/Ext2EC";
import Waru from "../../views/Projects/Waru";
import {personalRoutes} from "./personal-routes";

// Ensure the order of the component matches its respective route object
// Components are not tied to their objects so non-route related modules can import the rootRoutes
// NOTE: the order is also important with respect to how the in-app file viewer will order
// the pages
const projectRouteComponents = [
    LAG, GeneticFB, TAC, Trivialize, Ext2EC, Waru
];
const projectRoutes = [
    {
        path: '/LAG',
        meta: {
            label: 'LAG.cpp',
            icon: 'fas fa-file-code',
            iconColor: 'lightblue',
        }
    },
    {
        path: '/GeneticFB',
        meta: {
            label: 'GeneticFB.cs',
            icon: 'fas fa-file-code',
            iconColor: 'mediumpurple',
        }
    },
    {
        path: '/TAC',
        meta: {
            label: 'TAC.html',
            icon: 'fas fa-file-code',
            iconColor: 'darkorange',
        }
    },
    {
        path: '/Trivialize',
        meta: {
            label: 'Trivialize.html',
            icon: 'fas fa-file-code',
            iconColor: 'darkorange',
        }
    },
    {
        path: '/IntegrityChecker',
        meta: {
            label: 'Ext2EC.cc',
            icon: 'fas fa-file-code',
            iconColor: 'lightblue',
        }
    },
    {
        path: '/Waru',
        meta: {
            label: 'Waru.cs',
            icon: 'fas fa-file-code',
            iconColor: 'mediumpurple',
        }
    }
];

projectRoutes.forEach(route => {
    route.name = route.meta.label
});

export { projectRoutes, projectRouteComponents }
