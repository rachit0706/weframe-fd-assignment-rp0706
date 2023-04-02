export const menuItemData = {
    dashboards: [
        {
            id: 1,
            image: "images/inbox.png",
            label: "Inbox",
            count: 4
        },
        {
            id: 2,
            image: "images/drive_folder_upload.png",
            label: "Drive Files",
            count: 435
        },
        {
            id: 3,
            image: "images/dashboard_customize.png",
            label: "Boards",
            count: 5
        },
        {
            id: 4,
            image: "images/access_time.png",
            label: "Updates"
        },
        {
            id: 5,
            image: "images/data_usage.png",
            label: "Analytics",
            count: 2
        },
        {
            id: 6,
            image: "images/sell.png",
            label: "CRM Dashboard",
            count: 2
        },
        {
            id: 7,
            image: "images/payment_crypto.png",
            label: "Ecommerce",
        },
        {
            id: 8,
            image: "images/drive_folder_upload.png",
            label: "Cryptocurrency",
        },
        {
            id: 9,
            image: "images/lock_clock.png",
            label: "Projects",
        },
        {
            id: 10,
            image: "images/image_search.png",
            label: "NFT Marketplace",
        },
        {
            id: 11,
            image: "images/tune.png",
            label: "Settings",
            count: 2
        }
    ],
    projects: [
        {
            id: 1,
            image: "images/tag.png",
            label: "Additional Calendar",
            count: 6
        },
        {
            id: 2,
            image: "images/tag.png",
            label: "Brand Logo Design",
            count: 11
        },
        {
            id: 3,
            image: "images/tag.png",
            label: "User Research"
        },
        {
            id: 4,
            image: "images/tag.png",
            label: "Marketing Research",
            count: 23
        },
        {
            id: 5,
            image: "images/tag.png",
            label: "New Project Template",
            count: 2
        },
        {
            id: 6,
            image: "images/add_circle.png",
            label: "Add New Project"
        }
    ]
}

export const colorSchemes = {
    blue: {
        color: "#2563EB",
        backgroundColor: "rgba(59, 130, 246, 0.1)"
    },
    brown: {
        color: "#CA8A04",
        backgroundColor: "rgba(234, 179, 8, 0.1)"
    },
    pink: {
        color: "#DB2777",
        backgroundColor: "rgba(236, 72, 153, 0.1)"
    },
    purple: {
        color: "#9333EA",
        backgroundColor: "rgba(168, 85, 247, 0.1)"
    },
    green: {
        color: "#16A34A",
        backgroundColor: "rgba(34, 197, 94, 0.1)"
    },
    grey: {
        color: "#606C80",
        backgroundColor: "#FFFFFF",
        border: "1px solid #EBEEF2"
    }
}

export const taskData = {
    backlogTask: [
        {
            id: 1,
            title: "Model Answer",
            groupCount: 2,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#UI007",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "Design",
                    colorScheme: colorSchemes.blue
                },
                {
                    id: 3,
                    label: "Backlog",
                    colorScheme: colorSchemes.brown
                }
            ]
        },
        {
            id: 2,
            title: "Create calendar, chat and email app pages",
            groupCount: 2,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#UI003",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "Development",
                    colorScheme: colorSchemes.pink
                },
                {
                    id: 3,
                    label: "Backlog",
                    colorScheme: colorSchemes.brown
                }
            ]
        },
        {
            id: 3,
            title: "Product Design, Figma, Sketch (Software), Prototype",
            groupCount: 1,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#BC05",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "Project",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 3,
                    label: "Backlog",
                    colorScheme: colorSchemes.brown
                }
            ]
        },
        {
            id: 4,
            title: "Change email option process",
            groupCount: 2,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#FTC07",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "Backlog",
                    colorScheme: colorSchemes.brown
                }
            ]
        },
    ],
    todoTask: [
        {
            id: 1,
            title: "Model Answer",
            groupCount: 2,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#UI005",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "To Do",
                    colorScheme: colorSchemes.pink
                }
            ]
        },
        {
            id: 2,
            title: "Add authentication pages",
            tags: [
                {
                    id: 1,
                    label: "#UI008",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "To Do",
                    colorScheme: colorSchemes.pink
                }
            ]
        },
        {
            id: 3,
            title: "Profile Page Structure",
            groupCount: 1,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#UI008",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "To Do",
                    colorScheme: colorSchemes.pink
                }
            ]
        },
        {
            id: 4,
            title: "Create calendar, chat and email app pages",
            groupCount: 2,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#UI003",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "Development",
                    colorScheme: colorSchemes.pink
                },
                {
                    id: 3,
                    label: "Backlog",
                    colorScheme: colorSchemes.brown
                }
            ]
        },
    ],
    inProcessTask: [
        {
            id: 1,
            title: "Model Answer",
            groupCount: 2,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#002",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "In Process",
                    colorScheme: colorSchemes.purple
                }
            ]
        },
        {
            id: 2,
            title: "Model Answer",
            groupCount: 2,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#002",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "In Process",
                    colorScheme: colorSchemes.purple
                }
            ]
        }
    ],
    doneTask: [
        {
            id: 1,
            title: "Model Answer",
            groupCount: 2,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#002",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "Done",
                    colorScheme: colorSchemes.green
                }
            ]
        },
        {
            id: 2,
            title: "Create calendar, chat and email app pages",
            tags: [
                {
                    id: 1,
                    label: "#002",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "Done",
                    colorScheme: colorSchemes.green
                }
            ]
        },
        {
            id: 3,
            title: "Product Design, Figma, Sketch (Software), Prototype",
            groupCount: 1,
            fileCount: 4,
            messageCount: 4, taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#002",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "Done",
                    colorScheme: colorSchemes.green
                }
            ]
        },
        {
            id: 4,
            title: "Model Answer",
            groupCount: 2,
            fileCount: 4,
            messageCount: 4, 
            taskCount: 1,
            tags: [
                {
                    id: 1,
                    label: "#002",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "To Verify",
                    colorScheme: colorSchemes.purple
                }
            ]
        },
        {
            id: 5,
            title: "Create calendar, chat and email app pages",
            tags: [
                {
                    id: 1,
                    label: "#002",
                    colorScheme: colorSchemes.grey
                },
                {
                    id: 2,
                    label: "Done",
                    colorScheme: colorSchemes.green
                }
            ]
        },
    ],
}

export const desktopNavLinks = ["Dashboard", "My Tasks", "My Tasks", "Reporting", "Portfolios", "Goals"];

export const mobileNavLinks = ["Timeline", "Calendar", "Dashboard", "Progress", "Forms", "More"];

