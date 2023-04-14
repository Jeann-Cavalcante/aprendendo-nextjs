const Todo = ({data}) => {

  return (
    <div>
      <h1>
        Todo - Meu nome é {process.env.NEXT_PUBLIC_NAME}
      </h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.title} - {item.completed.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

export const getServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: { data },
  };
};