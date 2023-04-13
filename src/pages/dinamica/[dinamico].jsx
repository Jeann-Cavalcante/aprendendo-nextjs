import { useRouter } from "next/router";

const teste = () => {
  const router = useRouter();
  const { dinamico } = router.query;
  return (
    <div>
      <h1>{dinamico}</h1>
    </div>
  );
}

export default teste;