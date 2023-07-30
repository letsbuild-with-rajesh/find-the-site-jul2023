import MySpacePage from "./MySpacePage";
import { getMySpaceSites } from "@/app/utils/utils";

export default async function Category() {
  const sitesData = await getMySpaceSites();
  return (
    <main>
      <MySpacePage data={sitesData} />
    </main>
  );
}
