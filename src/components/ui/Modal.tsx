import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-[100]"
      onClick={onClose}
    >
      <div
        className="rounded-lg max-w-md w-full mx-4"
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
