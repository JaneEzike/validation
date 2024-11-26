/* eslint-disable @typescript-eslint/no-explicit-any */
const Wrapper = ({ children, className }: any) => {
  return (
    <div className={`bg-white h-fit w-fit rounded-xl p-7 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
