import ButtonArrow from "../components/ButtonArrow";

export default function PagePseudo() {
    return (
      <main>
        <h1>
          enter your <span>name</span>
        </h1>
        <h2>
          (you will join as <span>Joe Biden</span>)
        </h2>

        <div>

          <ButtonArrow link_uri={'/chat'} text='Join chat'/>
        </div>

      </main>
    );
}