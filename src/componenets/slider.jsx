import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

const SliderDemo = () => (
  <div className="flex my-10">
    <div className="mx-auto">
      <h1 className="pb-10">Value: </h1>
      <form>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-[200px] h-5"
          defaultValue={[50]}
          max={100}
          step={1}
        >
          <Slider.Track className="bg-blackA10 relative grow rounded-full h-[3px] bg-pink-300">
            <Slider.Range className="absolute bg-blue-300 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-green-800 shadow-[0_2px_10px] shadow-blackA7 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-blackA8"
            aria-label="Volume"
          />
        </Slider.Root>
      </form>
    </div>
  </div>
);

export default SliderDemo;
