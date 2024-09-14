import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import {
  Actions,
  Annotate,
  Comment,
  Dev,
  Frame,
  Measure,
  Pen,
  Pointer,
  Rectangle,
  Text,
} from "./icons";

export default function App() {
  const [devMode, setDevMode] = useState(false);
  const [selected, setSelected] = useState(1);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4 py-10">
      <motion.div className="shadow-box rounded-xl flex items-center gap-1.5">
        <motion.div className="h-12">
          <AnimatePresence>
            {!devMode ? (
              <motion.div className="flex items-center justify-center p-2 gap-4 h-full">
                <button
                  className="flex items-center justify-center gap-1 h-full"
                  onClick={() => setSelected(1)}
                >
                  <div
                    className="flex items-center justify-center rounded-md p-1.5 relative w-8 h-8 shrink-0"
                    style={{
                      color: selected === 1 ? "#FFF" : "#1A1A1A",
                    }}
                  >
                    <Pointer className="relative z-[2]" />
                    {selected === 1 && (
                      <motion.div
                        className="absolute inset-0 bg-[#0092FF] rounded-md"
                        layoutId="indicator"
                      ></motion.div>
                    )}
                  </div>
                  <ChevronDown size={12} strokeWidth={1.5} />
                </button>
                <button
                  className="flex items-center justify-center gap-1 h-full "
                  onClick={() => setSelected(2)}
                >
                  <div
                    className="flex items-center justify-center rounded-md p-1.5 relative w-8 h-8 shrink-0"
                    style={{
                      color: selected === 2 ? "#FFF" : "#1A1A1A",
                    }}
                  >
                    <Frame className="relative z-[2]" />
                    {selected === 2 && (
                      <motion.div
                        className="absolute inset-0 bg-[#0092FF] rounded-md"
                        layoutId="indicator"
                      ></motion.div>
                    )}
                  </div>
                  <ChevronDown size={12} strokeWidth={1.5} />
                </button>
                <button
                  className="flex items-center justify-center gap-1 h-full "
                  onClick={() => setSelected(3)}
                >
                  <div
                    className="flex items-center justify-center rounded-md p-1.5 relative w-8 h-8 shrink-0"
                    style={{
                      color: selected === 3 ? "#FFF" : "#1A1A1A",
                    }}
                  >
                    <Rectangle className="relative z-[2]" />
                    {selected === 3 && (
                      <motion.div
                        className="absolute inset-0 bg-[#0092FF] rounded-md"
                        layoutId="indicator"
                      ></motion.div>
                    )}
                  </div>
                  <ChevronDown size={12} strokeWidth={1.5} />
                </button>
                <button
                  className="flex items-center justify-center gap-1 h-full "
                  onClick={() => setSelected(4)}
                >
                  <div
                    className="flex items-center justify-center rounded-md p-1.5 relative w-8 h-8 shrink-0"
                    style={{
                      color: selected === 4 ? "#FFF" : "#1A1A1A",
                    }}
                  >
                    <Pen className="relative z-[2]" />
                    {selected === 4 && (
                      <motion.div
                        className="absolute inset-0 bg-[#0092FF] rounded-md"
                        layoutId="indicator"
                      ></motion.div>
                    )}
                  </div>
                  <ChevronDown size={12} strokeWidth={1.5} />
                </button>
                <button
                  className="flex items-center justify-center gap-1 rounded-md p-1.5 relative w-8 h-8 shrink-0"
                  onClick={() => setSelected(5)}
                  style={{
                    color: selected === 5 ? "#FFF" : "#1A1A1A",
                  }}
                >
                  <Text className="relative z-[2]" />{" "}
                  {selected === 5 && (
                    <motion.div
                      className="absolute inset-0 bg-[#0092FF] rounded-md"
                      layoutId="indicator"
                    ></motion.div>
                  )}
                </button>
                <button
                  className="flex items-center justify-center gap-1 rounded-md p-1.5 relative w-8 h-8 shrink-0"
                  onClick={() => setSelected(6)}
                  style={{
                    color: selected === 6 ? "#FFF" : "#1A1A1A",
                  }}
                >
                  <Comment className="relative z-[2]" />
                  {selected === 6 && (
                    <motion.div
                      className="absolute inset-0 bg-[#0092FF] rounded-md"
                      layoutId="indicator"
                    ></motion.div>
                  )}
                </button>
                <button
                  className="flex items-center justify-center gap-1 rounded-md p-1.5 relative w-8 h-8 shrink-0"
                  onClick={() => setSelected(7)}
                  style={{
                    color: selected === 7 ? "#FFF" : "#1A1A1A",
                  }}
                >
                  <Actions className="relative z-[2]" />
                  {selected === 7 && (
                    <motion.div
                      className="absolute inset-0 bg-[#0092FF] rounded-md"
                      layoutId="indicator"
                    ></motion.div>
                  )}
                </button>
              </motion.div>
            ) : (
              <motion.div className="flex items-center justify-center p-2 gap-4 h-full">
                <button
                  className="flex items-center justify-center gap-1 rounded-md p-1.5 relative w-8 h-8 shrink-0"
                  onClick={() => setSelected(1)}
                  style={{
                    color: selected === 1 ? "#FFF" : "#1A1A1A",
                  }}
                >
                  <Pointer className="relative z-[2]" />
                  {selected === 1 && (
                    <motion.div
                      className="absolute inset-0 bg-[#00B75F] rounded-md"
                      layoutId="indicator-dev"
                    ></motion.div>
                  )}
                </button>
                <button
                  className="flex items-center justify-center gap-1 rounded-md p-1.5 relative w-8 h-8 shrink-0"
                  onClick={() => setSelected(2)}
                  style={{
                    color: selected === 2 ? "#FFF" : "#1A1A1A",
                  }}
                >
                  <Measure className="relative z-[2]" />
                  {selected === 2 && (
                    <motion.div
                      className="absolute inset-0 bg-[#00B75F] rounded-md"
                      layoutId="indicator-dev"
                    ></motion.div>
                  )}
                </button>
                <button
                  className="flex items-center justify-center gap-1 rounded-md p-1.5 relative w-8 h-8 shrink-0"
                  onClick={() => setSelected(3)}
                  style={{
                    color: selected === 3 ? "#FFF" : "#1A1A1A",
                  }}
                >
                  <Annotate className="relative z-[2]" />
                  {selected === 3 && (
                    <motion.div
                      className="absolute inset-0 bg-[#00B75F] rounded-md"
                      layoutId="indicator-dev"
                    ></motion.div>
                  )}
                </button>
                <button
                  className="flex items-center justify-center gap-1 rounded-md p-1.5 relative w-8 h-8 shrink-0"
                  onClick={() => setSelected(4)}
                  style={{
                    color: selected === 4 ? "#FFF" : "#1A1A1A",
                  }}
                >
                  <Comment className="relative z-[2]" />
                  {selected === 4 && (
                    <motion.div
                      className="absolute inset-0 bg-[#00B75F] rounded-md"
                      layoutId="indicator-dev"
                    ></motion.div>
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <div className="bg-[#E6E6E6] w-[1px] self-stretch"></div>
        <div className="pl-2 pr-3 py-2.5 flex items-start h-12">
          <button
            className="flex items-center justify-start gap-1 rounded-md p-0.5 w-12 h-full shrink-0"
            style={{
              backgroundColor: devMode ? "#00B75F" : "#F5F5F5",
              justifyContent: devMode ? "flex-end" : "flex-start",
            }}
            onClick={() => {
              setDevMode((prev) => !prev);
              setSelected(1);
            }}
          >
            <motion.div
              layout
              className="p-1 h-full flex items-center justify-center rounded bg-white"
            >
              <Dev />
            </motion.div>
          </button>
        </div>
      </motion.div>
    </main>
  );
}
