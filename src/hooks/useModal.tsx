import { LottieComponentProps } from "lottie-react";
import * as React from "react";
import Modal, { IModal } from "../components/Modal";

interface IModalContext {
  setModalData: React.Dispatch<React.SetStateAction<IModal>>;
}
const ModalContext = React.createContext<IModalContext | undefined>(undefined);

interface IModalProvider {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: IModalProvider) => {
  //   const [on, setOn] = React.useState(false);
  const [modalData, setModalData] = React.useState<IModal>({});
  return (
    <ModalContext.Provider value={{ setModalData }}>
      {children}
      <Modal
        setOn={(b) => setModalData({ on: b })}
        buttonLabel={modalData.buttonLabel}
        handleButtonClick={modalData.handleButtonClick}
        type={modalData.type}
        on={modalData.on}
        heading={modalData.heading}
        color={modalData.color}
        image={modalData.image}
        bodyCopy={modalData.bodyCopy}
      />
    </ModalContext.Provider>
  );
};
export const useModal = () => {
  const context = React.useContext(ModalContext);
  if (typeof context === "undefined") {
    throw new Error("must use within provider");
  }
  return { ...context };
};
export {};
