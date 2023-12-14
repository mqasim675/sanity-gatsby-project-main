import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
const MyPostsComponent = () => {
    const data = useStaticQuery(graphql`
    query {
      allSanityPost {
        nodes {
          title
          author {
            name
          }
          slug {
            current
          }
          body {
            children {
              text
              _type
            }
          }
          mainImage {
            asset {
              url
            }
          }
        }
      }
    }
  `);

    const posts = data.allSanityPost.nodes;

    console.log(posts);
    return (
        <Layout className="container mx-auto">
            <h2 className="text-2xl font-bold mb-6">Posts:</h2>
            <ul className="list-none p-0">
                {posts.map((post) => (
                    <li key={post.title} className="bg-gray-800 p-4 rounded-lg mb-4">
                        <h3 className="text-white text-lg text-center mb-2">{post.title}</h3>
                        <p className="text-white text-center mb-2">Slug: {post.slug.current}</p>
                        <p className="text-white text-center mb-2">Author: {post.author.name}</p>
                        <p className="text-white mb-2">
                            Body: {post.body && post.body.children && post.body.children.map((child) => child.text).join(' ')}
                        </p>
                        <p className="text-center text-white mb-2">
                            Main Image:{' '}
                            {post.mainImage && post.mainImage.asset && post.mainImage.asset.url && (
                                <img src={post.mainImage.asset.url} alt={post.title} className="w-full max-w-full" />
                            )}
                        </p>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default MyPostsComponent;
