/* eslint-disable @typescript-eslint/no-explicit-any */
const Container = ({ children }: any) => {
  return (
    <div className="bg-[rgba(0,0,0,0.5)] h-screen w-full flex items-center justify-center">
      {children}
    </div>
  );
};

export default Container;
