import { translate } from "./morseLookup";

export default function Home() {
  return (
    <main>
      <h2>Code Translator</h2>
      <p>{translate("hello world")}</p>
    </main>
  );
}
