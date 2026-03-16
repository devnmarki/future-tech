import EbooksIcon from "/icons/ebooks-icon.svg";
import WhitepapersIcon from "/icons/whitepapers-icon.svg";
import AvatarImage1 from "/images/profile_1.png";
import AvatarImage2 from "/images/profile_2.png";
import AvatarImage3 from "/images/profile_3.png";
import AvatarImage4 from "/images/profile_4.png";
import AvatarImage5 from "/images/profile_5.png";
import AvatarImage6 from "/images/profile_6.png";
import AvatarImage7 from "/images/profile_7.png";
import AvatarImage8 from "/images/profile_8.png";
import { Button, Card, Header, Text } from "../..";

const ResourcesSection = () => {
  return (
    <section className="w-full bg-black-100">
      <div className="flex flex-col xl:flex-row items-center xl:justify-center xl:gap-x-15 2xl:gap-x-20 w-full px-4 py-10 xl:py-0 xl:px-20 2xl:px-40.5 xl:border-b border-black-300">
        <div className="w-full max-w-89.5 xl:max-w-none xl:w-103.25 2xl:w-129.75 shrink-0">
          <div className="flex flex-col justify-center items-start gap-y-6 xl:gap-y-7.5 2xl:gap-y-12.5 pb-10">
            <img src={EbooksIcon} className="xl:w-15 2xl:w-20" />
            <div>
              <Header className="text-2xl xl:text-3xl 2xl:text-[2.5rem] mb-1 xl:mb-2.5">
                Ebooks
              </Header>
              <Text className="text-sm xl:text-md 2xl:text-xl">
                Explore our collection of ebooks covering a wide spectrum of
                future technology topics.
              </Text>
            </div>
            <Button className="w-full 2xl:text-lg">Download Ebooks Now</Button>
            <Card className="flex-row gap-x-7.5 px-7.5 py-5">
              <div>
                <Text className="text-sm 2xl:text-lg mb-0.5">
                  Downloaded By
                </Text>
                <Header className="text-lg 2xl:text-xl">10k+ Users</Header>
              </div>
              <div className="flex justify-center items-center p-2 bg-black-100 rounded-xl">
                <img src={AvatarImage1} className="2xl:w-12.5" />
                <img src={AvatarImage2} className="-ml-2.5 2xl:w-12.5" />
                <img src={AvatarImage3} className="-ml-2.5 2xl:w-12.5" />
                <img src={AvatarImage4} className="-ml-2.5 2xl:w-12.5" />
              </div>
            </Card>
          </div>
        </div>

        <div className="hidden xl:block w-px self-stretch bg-black-300"></div>

        <div className="flex-1 w-full flex flex-col pt-10 xl:py-15 2xl:py-20 max-w-89.5 xl:max-w-none border-t xl:border-none border-black-300">
          <div className="flex flex-col xl:flex-row xl:items-center xl:gap-x-4">
            <Header className="text-lg xl:text-xl 2xl:text-2xl mb-2.5 xl:min-w-50.75">
              Variety of Topics
            </Header>
            <Text className="text-sm xl:text-md 2xl:text-lg">
              Topics include AI in education (25%), renewable energy (20%),
              healthcare (15%), space exploration (25%), and biotechnology
              (15%).
            </Text>
          </div>

          <div className="bg-[url(/images/resources-image-1.png)] bg-no-repeat bg-cover max-w-89.5 xl:max-w-none h-42.25 xl:h-68.75 2xl:h-83 rounded-[10px] my-6 2xl:my-7.5"></div>

          <div className="flex flex-col gap-y-4 xl:gap-y-6">
            <div className="flex flex-col xl:flex-row xl:gap-x-4 2xl:gap-x-5 gap-y-4">
              <Card className="gap-y-0.5 p-5">
                <Text className="text-sm xl:text-md 2xl:text-lg">
                  Total Ebooks
                </Text>
                <Header className="xl:text-nowrap xl:text-lg 2xl:text-xl">
                  Over 100 ebooks
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
                Average Author Expertise
              </Text>
              <Header className="xl:text-lg 2xl:text-xl">
                Ebooks are authored by renowned experts with an average of 15
                years of experience
              </Header>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center xl:justify-center xl:gap-x-15 2xl:gap-x-20 w-full px-4 py-10 xl:py-0 xl:px-20 2xl:px-40.5 xl:border-b border-black-300">
        <div className="w-full max-w-89.5 xl:max-w-none xl:w-103.25 2xl:w-129.75 shrink-0">
          <div className="flex flex-col justify-center items-start gap-y-6 xl:gap-y-7.5 2xl:gap-y-12.5 pb-10">
            <img src={WhitepapersIcon} className="xl:w-15 2xl:w-20" />
            <div>
              <Header className="text-2xl xl:text-3xl 2xl:text-[2.5rem] mb-1 xl:mb-2.5">
                Whitepapers
              </Header>
              <Text className="text-sm xl:text-md 2xl:text-xl">
                Dive into comprehensive reports and analyses with our collection
                of whitepapers.
              </Text>
            </div>
            <Button className="w-full 2xl:text-lg">
              Download Whitepapers Now
            </Button>
            <Card className="flex-row gap-x-7.5 px-7.5 py-5">
              <div>
                <Text className="text-sm 2xl:text-lg mb-0.5">
                  Downloaded By
                </Text>
                <Header className="text-lg 2xl:text-xl">10k+ Users</Header>
              </div>
              <div className="flex justify-center items-center p-2 bg-black-100 rounded-xl">
                <img src={AvatarImage5} className="2xl:w-12.5" />
                <img src={AvatarImage6} className="-ml-2.5 2xl:w-12.5" />
                <img src={AvatarImage7} className="-ml-2.5 2xl:w-12.5" />
                <img src={AvatarImage8} className="-ml-2.5 2xl:w-12.5" />
              </div>
            </Card>
          </div>
        </div>

        <div className="hidden xl:block w-px self-stretch bg-black-300"></div>

        <div className="flex-1 w-full flex flex-col pt-10 xl:py-15 max-w-89.5 xl:max-w-none border-t xl:border-none border-black-300">
          <div className="flex flex-col xl:flex-row xl:items-center xl:gap-x-4">
            <Header className="text-lg xl:text-xl 2xl:text-2xl mb-2.5 xl:min-w-50.75">
              Topics Coverage
            </Header>
            <Text className="text-sm xl:text-md 2xl:text-lg">
              Whitepapers cover quantum computing (20%), AI ethics (15%), space
              mining prospects (20%), AI in healthcare (15%), and renewable
              energy strategies (30%).
            </Text>
          </div>

          <div className="bg-[url(/images/resources-image-2.png)] bg-no-repeat bg-cover max-w-89.5 xl:max-w-none h-42.25 xl:h-68.75 2xl:h-83 rounded-[10px] my-6 2xl:my-7.5"></div>

          <div className="flex flex-col gap-y-4 xl:gap-y-6">
            <div className="flex flex-col xl:flex-row xl:gap-x-4 2xl:gap-x-5 gap-y-4">
              <Card className="gap-y-0.5 p-5">
                <Text className="text-sm xl:text-md 2xl:text-lg">
                  Total Whitepapers
                </Text>
                <Header className="xl:text-nowrap xl:text-lg 2xl:text-xl">
                  Over 50 whitepapers
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
                Average Author Expertise
              </Text>
              <Header className="xl:text-lg 2xl:text-xl">
                Whitepapers are authored by subject matter experts with an
                average of 20 years of experience.
              </Header>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
