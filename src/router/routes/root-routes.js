import Welcome from '../../views/Welcome'
import README from '../../views/README'

// Ensure the order of the component matches its respective route object
// Components are not tied to their objects so non-route related modules can import the rootRoutes
// NOTE: the order is also important with respect to how the in-app file viewer will order
// the pages
const rootRouteComponents = [
    Welcome, README
];
const rootRoutes = [
    {
        path: '/',
        meta: {
            label: 'Welcome.html',
            icon: 'fas fa-file-code',
            iconColor: 'darkorange',
        }
    },
    {
        path: '/README',
        meta: {
            label: 'README.txt',
            icon: 'fas fa-file-alt',
            introJs: 'Find out more about the site here!',
        }
    }
];

rootRoutes.forEach(route => {
    route.name = route.meta.label
});

export { rootRoutes, rootRouteComponents }


/*export default {
    WelcomeObj: {
        label: 'Welcome.html',
        fileName: 'Welcome.html',
        icon: 'fas fa-file-code',
        iconColor: 'darkorange',
        to: '/'
    },

    AboutMeObj: {
        label: 'AboutMe.html',
        fileName: 'AboutMe.html',
        icon: 'fas fa-file-code',
        iconColor: 'darkorange',
        to: '/AboutMe'
    },

    SkillsObj: {
        label: 'Skills.html',
        fileName: 'Skills.html',
        icon: 'fas fa-file-code',
        iconColor: 'darkorange',
        to: '/Skills'
    },

    READMEObj: {
        label: 'README.txt',
        fileName: 'README.txt',
        icon: 'fas fa-file-alt',
        introJs: 'Find out more about the site here!',
        to: '/README'
    },

    ExperienceObj: {
        label: 'Experience.html',
        fileName: 'Experience.html',
        icon: 'fas fa-file-code',
        iconColor: 'darkorange',
        to: '/Experience'
    },

    LAGObj: {
        label: 'LAG.cpp',
        fileName: 'LAG.cpp',
        icon: 'fas fa-file-code',
        iconColor: 'lightblue',
        to: '/LAG'
    },

    GeneticFBObj: {
        label: 'GeneticFB.cs',
        fileName: 'GeneticFB.cs',
        icon: 'fas fa-file-code',
        iconColor: 'mediumpurple',
        to: '/GeneticFB'
    },

    TACObj: {
        label: 'TAC.html',
        fileName: 'TAC.html',
        icon: 'fas fa-file-code',
        iconColor: 'darkorange',
        to: '/TAC'
    },

    TrivializeObj: {
        label: 'Trivialize.html',
        fileName: 'Trivialize.html',
        icon: 'fas fa-file-code',
        iconColor: 'darkorange',
        to: '/Trivialize'
    },

    Ext2ECObj: {
        label: 'Ext2EC.cc',
        fileName: 'Ext2EC.cc',
        icon: 'fas fa-file-code',
        iconColor: 'lightblue',
        to: '/IntegrityChecker'
    },

    WaruObj: {
        label: 'Waru.cs',
        fileName: 'Waru.cs',
        icon: 'fas fa-file-code',
        iconColor: 'mediumpurple',
        to: '/Waru'
    }
}*/

/*export const WelcomeObj =  {
    label: 'Welcome.html',
    fileName: 'Welcome.html',
    icon: 'fas fa-file-code',
    iconColor: 'darkorange',
    to: '/'
};

export const AboutMeObj = {
    label: 'AboutMe.html',
    fileName: 'AboutMe.html',
    icon: 'fas fa-file-code',
    iconColor: 'darkorange',
    to: '/AboutMe'
};

export const SkillsObj = {
    label: 'Skills.html',
    fileName: 'Skills.html',
    icon: 'fas fa-file-code',
    iconColor: 'darkorange',
    to: '/Skills'
};

export const READMEObj = {
    label: 'README.txt',
    fileName: 'README.txt',
    icon: 'fas fa-file-alt',
    introJs: 'Find out more about the site here!',
    to: '/README'
};

export const ExperienceObj = {
    label: 'Experience.html',
    fileName: 'Experience.html',
    icon: 'fas fa-file-code',
    iconColor: 'darkorange',
    to: '/Experience'
}

export const LAGObj = {
    label: 'LAG.cpp',
    fileName: 'LAG.cpp',
    icon: 'fas fa-file-code',
    iconColor: 'lightblue',
    to: '/LAG'
}

export const GeneticFBObj = {
    label: 'GeneticFB.cs',
    fileName: 'GeneticFB.cs',
    icon: 'fas fa-file-code',
    iconColor: 'mediumpurple',
    to: '/GeneticFB'
}

export const TACObj = {
    label: 'TAC.html',
    fileName: 'TAC.html',
    icon: 'fas fa-file-code',
    iconColor: 'darkorange',
    to: '/TAC'
}

export const TrivializeObj = {
    label: 'Trivialize.html',
    fileName: 'Trivialize.html',
    icon: 'fas fa-file-code',
    iconColor: 'darkorange',
    to: '/Trivialize'
};

export const Ext2ECObj = {
    label: 'Ext2EC.cc',
    fileName: 'Ext2EC.cc',
    icon: 'fas fa-file-code',
    iconColor: 'lightblue',
    to: '/IntegrityChecker'
};

export const WaruObj = {
    label: 'Waru.cs',
    fileName: 'Waru.cs',
    icon: 'fas fa-file-code',
    iconColor: 'mediumpurple',
    to: '/Waru'
};*/
