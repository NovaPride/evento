import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl flex-col bg-white/[2%] px-4">
      {children}
    </div>
  );
};

export default Container;
