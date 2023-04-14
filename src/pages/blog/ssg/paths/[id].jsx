const  BlogPath= ({data}) => {
  return (
    <div>
      <div>
        <img src={data.url} alt={data.title} />
        <h1>{data.title}</h1>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/photos/" + id
  );
  const data = await response.json();
  return {
    props: { data },
  };
};

export default BlogPath;