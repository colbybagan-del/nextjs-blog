// Import the file system module so the JSON file can be read.
import fs from 'fs';

// Import the path module so the location of the JSON file can be created.
import path from 'path';

// Create the full path to the posts.json file.
const postsFilePath = path.join(process.cwd(), 'data', 'posts.json');

// Create a function that gets all posts and sorts them by date.
export function getSortedPostsData() {
  // Read the contents of the posts.json file as text.
  const fileContents = fs.readFileSync(postsFilePath, 'utf8');

  // Convert the JSON text into a JavaScript array.
  const allPostsData = JSON.parse(fileContents);

  // Sort the posts from newest date to oldest date.
  return allPostsData.sort((a, b) => {
    // Compare the dates of the two posts being sorted.
    return new Date(b.date) - new Date(a.date);
  });
}

// Create a function that gets the IDs of all posts.
export function getAllPostIds() {
  // Read the contents of the posts.json file as text.
  const fileContents = fs.readFileSync(postsFilePath, 'utf8');

  // Convert the JSON text into a JavaScript array.
  const allPostsData = JSON.parse(fileContents);

  // Create the list of paths needed for the dynamic post pages.
  return allPostsData.map((post) => {
    // Return the route parameter for each post.
    return {
      // Create the params object required by Next.js.
      params: {
        // Use the post ID as the dynamic route value.
        id: post.id,
      },
    };
  });
}

// Create a function that gets the data for one specific post.
export function getPostData(id) {
  // Read the contents of the posts.json file as text.
  const fileContents = fs.readFileSync(postsFilePath, 'utf8');

  // Convert the JSON text into a JavaScript array.
  const allPostsData = JSON.parse(fileContents);

  // Find the post that has the requested ID.
  const postData = allPostsData.find((post) => post.id === id);

  // Return the matching post data.
  return postData;
}
