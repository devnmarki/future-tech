import { Header, Text } from "..";

interface HeaderSection {
  headerPrimary: string;
  headerSecondary: string;
  description: string;
}

const HeaderSection = ({
  headerPrimary,
  headerSecondary,
  description,
}: HeaderSection) => {
  return (
    <header className="flex justify-center w-full bg-black-100 px-4">
      <div className="flex flex-col gap-y-3.5 py-10 max-w-89.5 lg:max-w-120 xl:hidden">
        <Header className="text-[1.75rem]">
          {headerPrimary + " " + headerSecondary}
        </Header>
        <Text className="text-sm">{description}</Text>
      </div>

      <div className="hidden xl:flex p-20 2xl:px-40.5 2xl:py-32.5">
        <div className="flex flex-col gap-5">
          <Header className="text-[3.4375rem] 2xl:text-[5rem] whitespace-nowrap">
            {headerPrimary}
          </Header>
          <div className="flex items-center gap-15 w-full">
            <Header className="text-[3.4375rem] 2xl:text-[5rem] whitespace-nowrap">
              {headerSecondary}
            </Header>
            <Text className="text-md 2xl:text-lg w-full">{description}</Text>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
