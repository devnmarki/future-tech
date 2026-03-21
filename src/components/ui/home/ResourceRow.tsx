import type { ResourceRowData } from "../../../data/resources";
import { Header, Text, Button, Card } from "..";

interface ResourceRowProps {
  data: ResourceRowData;
}

const ResourceRow = ({ data }: ResourceRowProps) => {
  return (
    <div className="flex flex-col xl:flex-row items-center xl:justify-center xl:gap-x-15 2xl:gap-x-20 w-full px-4 py-10 xl:py-0 xl:px-20 2xl:px-40.5 xl:border-b border-black-300">
      <div className="w-full max-w-89.5 xl:max-w-none xl:w-103.25 2xl:w-129.75 shrink-0">
        <div className="flex flex-col justify-center items-start gap-y-6 xl:gap-y-7.5 2xl:gap-y-12.5 pb-10">
          <img src={data.icon} className="xl:w-15 2xl:w-20" />
          <div>
            <Header className="text-2xl xl:text-3xl 2xl:text-[2.5rem] mb-1 xl:mb-2.5">
              {data.header}
            </Header>
            <Text className="text-sm xl:text-md 2xl:text-xl">
              {data.description}
            </Text>
          </div>
          <Button className="w-full 2xl:text-lg">{data.buttonContent}</Button>
          <Card className="flex-row gap-x-7.5 px-7.5 py-5">
            <div>
              <Text className="text-sm 2xl:text-lg mb-0.5">Downloaded By</Text>
              <Header className="text-lg 2xl:text-xl">10k+ Users</Header>
            </div>
            <div className="flex justify-center items-center p-2 bg-black-100 rounded-xl">
              <img src={data.avatars[0]} className="2xl:w-12.5" />
              <img src={data.avatars[1]} className="-ml-2.5 2xl:w-12.5" />
              <img src={data.avatars[2]} className="-ml-2.5 2xl:w-12.5" />
              <img src={data.avatars[3]} className="-ml-2.5 2xl:w-12.5" />
            </div>
          </Card>
        </div>
      </div>

      <div className="hidden xl:block w-px self-stretch bg-black-300"></div>

      <div className="flex-1 w-full flex flex-col pt-10 xl:py-15 2xl:py-20 max-w-89.5 xl:max-w-none border-t xl:border-none border-black-300">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-x-4">
          <Header className="text-lg xl:text-xl 2xl:text-2xl mb-2.5 xl:min-w-50.75">
            {data.content.header}
          </Header>
          <Text className="text-sm xl:text-md 2xl:text-lg">
            {data.content.description}
          </Text>
        </div>

        <div
          style={{ backgroundImage: `url(${data.content.image})` }}
          className={`bg-no-repeat bg-cover max-w-89.5 xl:max-w-none h-42.25 xl:h-68.75 2xl:h-83 rounded-[10px] my-6 2xl:my-7.5`}
        ></div>

        <div className="flex flex-col gap-y-4 xl:gap-y-6">
          <div className="flex flex-col xl:flex-row xl:gap-x-4 2xl:gap-x-5 gap-y-4">
            <Card className="gap-y-0.5 p-5">
              <Text className="text-sm xl:text-md 2xl:text-lg">
                {data.content.cards[0].header}
              </Text>
              <Header className="xl:text-nowrap xl:text-lg 2xl:text-xl">
                {data.content.cards[0].text}
              </Header>
            </Card>
            <Card className="flex-row justify-between items-center gap-x-7.5 w-full p-5">
              <div className="xl:w-full">
                <Text className="text-sm xl:text-md 2xl:text-lg">
                  Downloaded Formats
                </Text>
                <Header className="xl:text-lg 2xl:text-xl">
                  PDF format for access.
                </Header>
              </div>
              <Button className="text-sm xl:text-md">Preview</Button>
            </Card>
          </div>
          <Card className="gap-y-0.5 p-5">
            <Text className="text-sm xl:text-md 2xl:text-lg">
              {data.content.cards[1].header}
            </Text>
            <Header className="xl:text-lg 2xl:text-xl">
              {data.content.cards[1].text}
            </Header>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResourceRow;
