import React, { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";
interface ModelProps {
  isOpen?: boolean;
  onClick?: () => void;
  onSubmit: () => void;
  onClose: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}
const Model: React.FC<ModelProps> = ({
  isOpen,
  onClick,
  onSubmit,
  onClose,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div
        className="
       flex
       justify-center
       items-center
       overflow-x-hidden
       overflow-y-auto
       fixed z-50 inset-0 outline-none
       focus:outline-none
       bg-neutral-800
       bg-opacity-70
       "
      >
        <div className="w-full, relative lg:w-3/6 h-full mx-auto lg:max-w-3xl lg:h-auto">
          {/* content */}
          <div className="h-full lg:h-auto border-o rounded-lg shadow-lg flex flex-col relative outline-none bg-black focus:outline-none">
            {/* heading */}
            <div className="flex items-center justify-between p-8 rounded-t">
              <h2 className="text-2xl font-semibold text-white">{title}</h2>
              <button
                onClick={handleClose}
                className="
              p-1 ml-auto border-0 text-white
               transition hover:opacity-70
              "
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/* body */}
            <div>{body}</div>
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                large
                onClick={handleSubmit}
              />
            </div>
            {footer}
          </div>
        </div>
      </div>
    </>
  );
};

export default Model;
