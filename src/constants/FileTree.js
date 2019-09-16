import {WelcomeObj, AboutMeObj, SkillsObj, READMEObj, ExperienceObj, LAGObj, GeneticFBObj, TACObj, TrivializeObj, Ext2ECObj} from "./PageObjects";

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
            files: [LAGObj, GeneticFBObj, TACObj, TrivializeObj, Ext2ECObj]
        },
        {
            label: 'Kenny',
            introJs: 'Learn about me here!',
            directories: [],
            files: [AboutMeObj, SkillsObj, ExperienceObj,]
        }
    ],
    files: [WelcomeObj, READMEObj]
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

