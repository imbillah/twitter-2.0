import useRegisterModal from "@/hooks/useRegisterModal";
import useLoginModal from "@/hooks/useLoginModal";
import React, { useCallback, useState } from "react";
import { Input, Modal } from "..";

const RegisterModals = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      //   login functionality
      registerModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [registerModal]);
  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }
    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal]);
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        disabled={isLoading}
        value={name}
      />
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
        value={email}
      />
      <Input
        placeholder="User Name"
        onChange={(e) => setUserName(e.target.value)}
        disabled={isLoading}
        value={userName}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        disabled={isLoading}
        value={password}
      />
    </div>
  );
  const footerContent = (
    <div className="my-4 text-neutral-400 text-center">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline"
        >
          Sign in
        </span>
      </p>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      title="Register an account"
      actionLabel="Sign up"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModals;
