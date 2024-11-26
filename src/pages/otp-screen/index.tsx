/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";
import OtpInput from "react-otp-input";
import bg from "@/assets/bgImage.svg";

const OtpScreen = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = () => {
    navigate("/info");
  };

  return (
    <Container>
      <Wrapper className="w-11/12 md:w-[40%] flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center gap-3 items-center ">
          <img src={bg} alt="" className="h-[70px] w-[70px]" />
          <h1 className="font-bold text-2xl">Verify your BVN</h1>
          <h2 className="text-xl w-[70%] text-center">
            We just sent a 4- digit code to J*********@gmail.com, enter it below
          </h2>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3">
            <Controller
              name="otp"
              control={control}
              rules={{
                required: "OTP is required",
                validate: (value) =>
                  value.length === 4 || "OTP must be 4 digits",
              }}
              render={({ field }) => (
                <OtpInput
                  value={field.value}
                  onChange={field.onChange}
                  numInputs={4}
                  renderSeparator={<span className="mx-2">-</span>}
                  renderInput={(props) => (
                    <input
                      {...props}
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                      className="text-center text-2xl border-[3px] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  )}
                />
              )}
            />
            {errors.otp && (
              <span className="text-red-600">This field is required</span>
            )}
            <p className="pt-4">
              Didn’t get the code?{" "}
              <span className="text-blue">Resend email</span>
            </p>
          </div>
          <div className="pt-5 flex justify-between gap-x-5">
            <button
              className="bg-gray-300  text-black w-full  p-3 mt-4 rounded-lg"
              type="submit"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              className="bg-blue text-white w-full  p-3 mt-4 rounded-lg"
              type="submit"
            >
              Verify BVN
            </button>{" "}
          </div>
        </form>
      </Wrapper>
    </Container>
  );
};

export default OtpScreen;
