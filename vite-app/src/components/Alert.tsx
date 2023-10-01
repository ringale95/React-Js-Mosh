import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  //to make the parent of the component we have clicjked the close button
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible ">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        data-bs-target="#my-alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
