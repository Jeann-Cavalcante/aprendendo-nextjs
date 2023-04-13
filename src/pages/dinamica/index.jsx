import Link from "next/link";

const dinamica = () => {
  return (
    <ul>
      <li>
        <Link href={"/dinamica/teste1"}>teste1</Link>
      </li>
      <li>
        <Link href={"/dinamica/teste2"}>teste2</Link>
      </li>
    </ul>
  );
}

export default dinamica;