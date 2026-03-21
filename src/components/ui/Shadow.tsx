interface ShadowProps {
  shown: boolean;
}

const Shadow = ({ shown }: ShadowProps) => {
  return (
    <div
      className={`${shown ? "flex" : "hidden"} fixed top-0 left-0 size-full bg-black opacity-75 z-20`}
    ></div>
  );
};

export default Shadow;
