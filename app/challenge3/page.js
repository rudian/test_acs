'use client';

import {useEffect} from "react";

export default function Challenge3() {

  const twoSum = (numbers,target)=>
  {
    for (let i = 0; i < numbers.length; i++)
    {
        for (let j = 0; j < numbers.length; j++)
        {
            if(i==j)
            {
              continue;
            }

            if(numbers[i]+numbers[j]==target)
            {
                return [(i+1),(j+1)];
            }
        }
    }
    return [];
  }

  useEffect(function () {
      console.log(twoSum([1,5,2,10],7));
  },[]);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Challenge 3 (Please checkout the result from the console)
    </main>
  );
}
