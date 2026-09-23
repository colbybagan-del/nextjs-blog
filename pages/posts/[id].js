// Import reusable CSS utility classes for styling the post page.
import utilStyles from '../../styles/utils.module.css';

// Import the Date component for displaying the post's publication date.
import Date from '../../components/date';

// Import the Next.js Head component for setting the browser page title.
import Head from 'next/head';

// Import the shared Layout component for the website structure.
import Layout from '../../components/layout';

// Import the existing custom CSS module for individual blog posts.
import styles from '../../styles/Post.module.css';

// Import functions that retrieve post IDs and post data from the JSON file.
import { getAllPostIds, getPostData } from '../../lib/posts-json';

// Generate the paths for all blog posts at build time.
export async function getStaticPaths() {
  // Retrieve the IDs of all posts in the JSON data file.
  const paths = getAllPostIds();

  // Return the available paths to Next.js.
  return {
    // Provide Next.js with the list of blog post paths.
    paths,

    // Display a 404 page if a requested post does not exist.
    fallback: false,
  };
}

// Retrieve the complete data for the requested blog post.
export async function getStaticProps({ params }) {
  // Retrieve the content and metadata for the requested post ID.
  const postData = await getPostData(params.id);

  // Return the post data so it can be passed to the Post component.
  return {
    // Store the requested post information in the props object.
    props: {
      // Pass the post data to the Post component.
      postData,
    },
  };
}

// Create the component that displays an individual blog post.
export default function Post({ postData }) {
  // Return the JSX structure for the individual blog post.
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article className={styles.post}>
        <h1 className={`${utilStyles.headingXl} ${styles.title}`}>
          {postData.title}
        </h1>

        <div className={`${utilStyles.lightText} ${styles.date}`}>
          <Date dateString={postData.date} />
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}
