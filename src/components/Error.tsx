import Link from "next/link";

interface IProps {
  error?: string;
}

function Error(Props: IProps) {
  return (
    <>
      <div className="flex flex-col px-4 space-y-12 justify-center items-center h-[90vh]">
        <div className="border-slate-800 border-2 select-none gap-2 flex flex-col p-4 max-w-4xl w-full rounded-lg">
          <h1 className="flex justify-center font-semibold text-lg border-b mb-3 pb-2 border-b-slate-600">
            An error occurred
          </h1>
          <div className="flex gap-2 w-full justify-center">{Props?.error}</div>
        </div>
      </div>
    </>
  );
}

export default Error;
