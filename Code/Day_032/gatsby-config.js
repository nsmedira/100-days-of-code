module.exports = {
    siteMetadata: {
        title: "NickSmedira.com",
        author: {
            name: "Nick Smedira",
            summary: "FileMaker and Javascript developer providing solutions to complex business problems in Cleveland, Ohio",
        },
        siteUrl: "https://www.nicksmedira.com",
        description: "Portfolio and blog of JavaScript and FileMaker developer Nick Smedira.",
        social: {
            twitter: "nsmedira"
        },
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content/blog`,
                name: "blog"
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {

                // CommonMark mode (default: true)
                commonmark: true,

                // Footnotes mode (default: true)
                footnotes: true,

                // pedantic mode (default: true)
                pedantic: true,

                // GitHub Flavored Markdown mode (default: true)
                gfm: true,

                // Plugins configs
                plugins: [],

            },
        },
    ],
}