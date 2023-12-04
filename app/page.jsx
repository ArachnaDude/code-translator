import { morseLookup } from "./morseLookup";

export default function Home() {
  return (
    <main>
      <h2>Code Translator</h2>
      <p>{`${morseLookup.H}${morseLookup.E}${morseLookup.L}${morseLookup.L}${morseLookup.O}`}</p>
    </main>
  );
}
