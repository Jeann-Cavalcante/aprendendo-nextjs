import Image from "next/image";
import Link from "next/link";

const BlogSsg = (props) => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-6">
      {props.data.map((item) => (
        <Link key={item.id} href={"/blog/ssg/paths/" + item.id}>
          <div className="w-[400px] p-2 bg-gray-400 rounded-md">
            <Image width={400} height={400} src={item.url} alt={item.title} />
            <h1 className="py-6 text-lg font-bold">{item.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  // fetch data from an API
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const dataJson = await response.json();
  const data = dataJson.filter((item) => item.albumId === 1);
  return {
    props: {
      data,
    },
    revalidate: 7200, // sera revalidado a cada 2 horas
  };
}

export default BlogSsg;