/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import Container from "@/components/container";
import Wrapper from "@/components/wrapper";
import bg from "@/assets/bgImage.svg";
import { FaCalendarAlt } from "react-icons/fa";

const InfoScreen = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      bvn: "",
      nin: "",
      dob: null,
    },
  });

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  return (
    <Container>
      <Wrapper className=" flex flex-col justify-center items-center w-11/12 md:w-[40%]">
        <div className="w-full">
          <div className="flex flex-col justify-center gap-3 items-center">
            <img src={bg} alt="Background Icon" className="h-[70px] w-[70px]" />
            <h1 className="font-bold text-2xl">Enter your Information</h1>
            <h2 className="text-xl w-[70%] text-center">
              Enter the required details below
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-4">
              <label htmlFor="bvn" className="font-medium pb-3">
                BVN
              </label>
              <input
                {...register("bvn", { required: true })}
                placeholder="Enter your BVN"
                className="border border-gray-400 p-3 rounded-md"
              />
              {errors.bvn && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="nin" className="font-medium pb-3">
                NIN
              </label>
              <input
                {...register("nin", { required: true })}
                placeholder="Enter your NIN"
                className="border border-gray-400 p-3 rounded-md"
              />
              {errors.nin && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="flex flex-col mb-4 relative ">
              <label htmlFor="dob" className="font-medium pb-3">
                Date of Birth
              </label>

              <Controller
                name="dob"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <DatePicker
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    className="border border-gray-400 p-3 rounded-md w-full"
                    maxDate={new Date()}
                    placeholderText="Select your date of birth"
                  />
                )}
              />
              <FaCalendarAlt className="absolute right-4 top-12" size={22} />

              {errors.dob && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            <div className="pt-5 flex justify-between gap-x-5">
              <button
                className="bg-gray-300 text-black w-full p-3 rounded-lg"
                type="button"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white w-full p-3 rounded-lg"
                type="submit"
              >
                Verify BVN
              </button>
            </div>
          </form>
        </div>
      </Wrapper>
    </Container>
  );
};

export default InfoScreen;
