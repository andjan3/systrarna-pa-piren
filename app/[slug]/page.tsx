import { getData } from "@/data/get-data";
import { getSettings } from "@/data/get-settings";
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);
  const settings = await getSettings();
  console.log(settings);
  console.log("test", settings.data.data.story);
  return (
    <StoryblokStory
      story={story.data.data.story}
      settings={settings.data.data.story}
    />
  );
};

export default Page;
