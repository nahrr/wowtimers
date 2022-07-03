import style from ".//Footer.module.css";
import { FaDiscord } from "react-icons/fa";
import { useState } from "react";
import { useCopyToClipboard } from "../hooks/CopyToClipboard";

const Footer = () => {
  const { isCopied, copied, onCopy } = useCopyToClipboard("Nahr#7659");
  return (
    <footer className={style.footer}>
      {isCopied ? (
        <span className={style.username}>
          {copied && copied} <span className={style.copied}>copied!</span>
        </span>
      ) : (
        <FaDiscord className={style.logo} onClick={onCopy} />
      )}
    </footer>
  );
};

export default Footer;
