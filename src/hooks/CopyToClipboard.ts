import { useState } from "react";

const useCopyToClipboard = (text: string) => {
  const [copied, setCopied] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(text);
    setIsCopied(true);
  };

  return { isCopied, copied, onCopy };
};

export { useCopyToClipboard };
