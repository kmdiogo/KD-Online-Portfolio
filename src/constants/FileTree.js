import {WelcomeObj, AboutMeObj, SkillsObj, CommandsObj, ExperienceObj, LAGObj, GeneticFBObj, TACObj} from "./PageObjects";

export const tree = {
    label: 'Root',
    directories: [
        {
            label: 'Projects',
            directories: [],
            files: [LAGObj, GeneticFBObj, TACObj]
        },
        {
            label: 'Kenny',
            directories: [],
            files: [AboutMeObj, SkillsObj]
        }

    ],
    files: [WelcomeObj, ExperienceObj, CommandsObj]
}

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

