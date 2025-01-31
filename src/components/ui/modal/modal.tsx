import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useModal } from "./modal.context";
import type { TModal } from "./modal.types";
import { StyledModalContainer, StyledModalContent } from "./modal.styles";
import Typography from "../typography";
import Flex from "../flex";

const Modal = ({ title, children, onClose }: TModal) => {
  const { isOpen } = useModal();

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModalContainer align="flex-end">
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
      >
        <StyledModalContent gap="50" justify="flex-start">
          <Flex direction="row" justify="space-between" align="flex-start">
            <Typography size="18" style={{ color: "#000" }}>
              {title}
            </Typography>
            <MdClose
              size={18}
              style={{ cursor: "pointer" }}
              onClick={onClose}
            />
          </Flex>
          <Flex>{children}</Flex>
        </StyledModalContent>
      </motion.div>
    </StyledModalContainer>,
    document.body
  );
};

export default Modal;
