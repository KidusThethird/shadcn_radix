import React from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useState } from "react";

const RadioGrouptest = () => {
  const [selected, setSelected] = useState("not selected");

  const handleValueChange = (value) => {
    setSelected(value);
  };

  return (
    <div className="w-full h-80 flex flex-col ">
      <h1 className="text-2xl pb-10 mx-auto my-auto">Selected: {selected}</h1>
      <form className="text-blue-700 mx-auto my-auto">
        <RadioGroup.Root
          className="flex flex-col gap-2.5"
          defaultValue="default"
          aria-label="View density"
          onValueChange={handleValueChange}
        >
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="default"
              id="r1"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label className=" text-[15px] leading-none pl-[15px]" htmlFor="r1">
              Default
            </label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[25px] h-[25px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
              value="comfortable"
              id="r2"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label className=" text-[15px] leading-none pl-[15px]" htmlFor="r2">
              Comfortable
            </label>
          </div>
          <div className="flex items-center">
            <RadioGroup.Item
              className="bg-white w-[10px] h-[10px] rounded-full shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:bg-green-700 focus:shadow-[0_0_0_2px] focus:shadow-green-500 outline-fuchsia-500 cursor-default"
              value="compact"
              id="r3"
            >
              <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-violet11" />
            </RadioGroup.Item>
            <label className="text-[15px] leading-none pl-[15px]" htmlFor="r3">
              Compact
            </label>
          </div>
        </RadioGroup.Root>
      </form>
    </div>
  );
};

export default RadioGrouptest;
