const path = require("path")

exports.createPages = ({graphql,actions}) => {
    const {createPage} = actions
    return graphql(`
    {
        allWorksYaml {
            edges {
                node {
                    slug
                }
            }
        }
    }
    `).then(result => {
        result.data.allWorksYaml.edges.map(edge => {
            const work = edge.node
            console.log("Create Page", `/works/${work.slug}`)
            createPage({
                path: `/works/${work.slug}`,
                component: path.resolve("./src/templates/work.js"),
                context: {
                    slug: work.slug,
                },
            })
        })
    })
}