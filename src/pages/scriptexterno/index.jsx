import Script from "next/script";

const scriptExterno = () => {
  return (
    <div>
      <h1>Script Externo</h1>

      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" />
    </div>
  );
}

export default scriptExterno;