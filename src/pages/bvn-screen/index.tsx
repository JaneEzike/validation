/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";

import bg from "@/assets/bgImage.svg";

const BvnScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/otp");
  };
  return (
    <Container>
      <Wrapper className="w-11/12 md:w-[40%]">
        <div className=" flex flex-col justify-center gap-3 items-center ">
          <img src={bg} alt="" className="h-[70px] w-[70px]" />
          <h1 className="font-bold text-2xl">Enter your BVN</h1>
          <h2 className="text-xl">
            We need your BVN to upgrade your wallet to tier 3
          </h2>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="py-7">
          <div className="flex flex-col">
            <label htmlFor="" className="font-medium pb-3">
              BVN{" "}
            </label>
            <input
              {...register("bvn", { required: true })}
              placeholder="Enter your Bank Verification Number"
              className="border-[1px] border-gray-400 p-3"
            />
            {errors.bvn && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div className="pt-5 flex flex-col gap-y-7">
            <button className="bg-blue-primary text-primary w-full p-3 rounded-lg">
              Don’t know your BVN? Dial *565#
            </button>{" "}
            <button
              className="bg-blue text-white w-full p-3 mt-4 rounded-lg"
              type="submit"
            >
              Verify with OTP
            </button>{" "}
            <button
              className="bg-gray-300 text-black w-full p-3 mt-4 rounded-lg"
              type="submit"
            >
              Verify with alternative means
            </button>
          </div>
        </form>
      </Wrapper>
    </Container>
  );
};

export default BvnScreen;
