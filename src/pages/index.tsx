import { Button, Heading, VStack, useStatStyles } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useDisclosure, Modal, ModalBody, ModalOverlay, ModalHeader, ModalCloseButton, ModalFooter, ModalContent } from "@chakra-ui/react";
import WalletModal from "./WalletModal";

const Wallets = dynamic(() => import("../components/Wallets"), { ssr: false });

const IndexPage: React.FC = () => {
  const [modalState, setModalState] = useState(false)
  const showModal = () => {
    setModalState(true)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <VStack gap={8} mt={16} >
      <WalletModal />
    </VStack>
    </>

  );
}
export default IndexPage