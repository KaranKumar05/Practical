import React from "react";

function Title({ title, desc }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl tablet:text-3xl border-b border-black w-1/2 text-center font-semibold">
        {title}
      </h1>
      <p className="text-center">{desc}</p>
    </div>
  );
}

export default Title;
