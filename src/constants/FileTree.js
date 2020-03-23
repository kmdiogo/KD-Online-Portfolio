import {rootRoutes} from "../router/routes/root-routes";
import {personalRoutes} from "../router/routes/personal-routes";
import {projectRoutes} from "../router/routes/project-routes";

export const tree = {
    label: 'Root',
    directories: [
        {
            label: 'Projects',
            introJs: 'Browse my projects here!',
            directories: [
                /*{
                    label: 'NANI',
                    directories: [],
                    files: [AboutMeObj, SkillsObj, ExperienceObj,]
                }*/
            ],
            files: projectRoutes
        },
        {
            label: 'Kenny',
            introJs: 'Learn about me here!',
            directories: [],
            files: personalRoutes
        }
    ],
    files: rootRoutes
};

export function convertTreeToArray(node, parent=null, treeArray=[]) {
    treeArray.push({
        label: node.label,
        files: node.files,
        directories: [],
        parent: parent
    });

    let parentNode = treeArray.length-1;
    if (parent != null) {
        treeArray[parent].directories.push(treeArray.length-1);
    }
    for (let i=0; i < node.directories.length; i++) {
        convertTreeToArray(node.directories[i], parentNode, treeArray);

    }

}

