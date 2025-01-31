export type TModal = {
  title: string;
  children: React.ReactNode;
  onClose?: () => void;
};

export type TModalContext = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export type TModalProvider = {
  children: React.ReactNode;
};
