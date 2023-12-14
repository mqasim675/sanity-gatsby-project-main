// // src/hooks/use-site-metadata.js: copy code to clipboard
// import { useStaticQuery, graphql } from "gatsby"

// export const useSiteMetadata = () => {
//   const { site } = useStaticQuery(
//     graphql`
//       query SiteMetaData {
//         site {
//           siteMetadata {
//             title
//             siteUrl
//             headline
//             description
//             image
//             video
//             twitter
//             name
//             logo
//           }
//         }
//       }
//     `
//   )
//   return site.siteMetadata
// }