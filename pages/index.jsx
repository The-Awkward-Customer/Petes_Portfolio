import { Standfirst } from "../Components/micro/Standfirst";
import TypingText from "../Components/micro/TypingText";
import { HomePage } from "../Components/templates/HomePage";
import { Page } from "../Components/templates/Page";

export default function Home() {
  return (
    <Page>
      <HomePage>
        <Standfirst />
        <TypingText />
      </HomePage>
    </Page>
  );
}
