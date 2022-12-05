async function getPost(postID) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
  const post = await res.json()
  return post
}

export default async function PostRoute({ params }) {
  const post = await getPost(params.postID)

  return (
    <div><span>params: {params.postID}</span>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    </div>
  )
}
