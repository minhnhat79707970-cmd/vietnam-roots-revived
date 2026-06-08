import { useCallback, useState } from "react";
import { ChatTriggerButton } from "./ChatTriggerButton";
import { HeritageChatbot } from "./HeritageChatbot";

export function AIAssistantProvider() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((p) => !p), []);
  const close = useCallback(() => setIsOpen(false), []);
  return (
    <>
      <ChatTriggerButton isOpen={isOpen} onClick={toggle} />
      <HeritageChatbot isOpen={isOpen} onClose={close} />
    </>
  );
}

export { ChatTriggerButton, HeritageChatbot };