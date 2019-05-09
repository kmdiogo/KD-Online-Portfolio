export const tree = {
    label: 'Root',
    directories: [
        {
            label: 'Projects',
            directories: [],
            files: []
        },
        {
            label: 'Experience',
            directories: [        {
                label: 'Experience2',
                directories: [],
                files: []
            },        {
                label: 'Experience3',
                directories: [],
                files: []
            },        {
                label: 'Experience4',
                directories: [],
                files: []
            }],
            files: []
        },

    ],
    files: [
        {
            label: 'Welcome.html',
            fileName: 'Welcome.html',
            icon: 'fas fa-file-code',
            iconColor: 'darkorange',
            to: '/',
        },
        {
            label: 'AboutMe.html',
            fileName: 'AboutMe.html',
            icon: 'fas fa-file-code',
            iconColor: 'darkorange',
            to: '/AboutMe'
        },
        {
            label: 'Skills.html',
            fileName: 'Skills.html',
            icon: 'fas fa-file-code',
            iconColor: 'darkorange',
            to: '/Skills'
        },
        {
            label: 'Commands.txt',
            fileName: 'Commands.txt',
            icon: 'fas fa-file-alt',
            iconColor: 'gray',
            to: '/Commands'
        }
    ]
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
