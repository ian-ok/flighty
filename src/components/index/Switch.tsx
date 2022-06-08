import { useState } from "react";
import { Switch as Switcher } from "@headlessui/react";

interface IProps {
  label?: string;
  onChange?: (e: boolean) => void;
}

function Switch(props: IProps) {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Switcher.Group>
        <div className="flex items-center">
          <Switcher.Label className="mr-4 text-gray-300">
            {props.label ? props.label : ""}
          </Switcher.Label>
          <Switcher
            checked={enabled}
            onChange={(e: any) => {
              setEnabled(e);
              props.onChange?.(e);
            }}
            className={`${
              enabled
                ? "bg-green-500 hover:bg-green-600"
                : "bg-slate-700 hover:bg-slate-600"
            } relative inline-flex h-6 w-14 items-center rounded-full transition-colors focus:outline-none`}
          >
            <span
              className={`${
                enabled ? "translate-x-9" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switcher>
        </div>
      </Switcher.Group>
    </>
  );
}

export default Switch;
