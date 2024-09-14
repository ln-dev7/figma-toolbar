import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Actions,
  Annotate,
  ChevronDown,
  Comment,
  Dev,
  Frame,
  Measure,
  Pen,
  Pointer,
  Rectgangle,
  Text,
} from "./icons";

export default function App() {
  const [devMode, setDevMode] = useState(false);
  const [indicator, setIndicator] = useState(false);
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4 py-10">
      <motion.div className="shadow-box rounded-xl flex items-center gap-1.5">
        <motion.div className="">
          <motion.div className="flex items-center justify-center">
            <button className="flex items-center gap-1 rounded-md p-1">
              <Pointer />
              <ChevronDown />
            </button>
            <button className="flex items-center gap-1 rounded-md p-1">
              <Frame />
              <ChevronDown />
            </button>
            <button className="flex items-center gap-1 rounded-md p-1">
              <Rectgangle />
              <ChevronDown />
            </button>
            <button className="flex items-center gap-1 rounded-md p-1">
              <Pen />
              <ChevronDown />
            </button>
            <button className="flex items-center gap-1 rounded-md p-1">
              <Text />
            </button>
            <button className="flex items-center gap-1 rounded-md p-1">
              <Comment />
            </button>
            <button className="flex items-center gap-1 rounded-md p-1">
              <Actions />
            </button>
          </motion.div>
          <motion.div className="flex items-center justify-center">
            <button className="flex items-center gap-1 rounded-md p-1">
              <Pointer />
            </button>
            <button className="flex items-center gap-1 rounded-md p-1">
              <Measure />
            </button>
            <button className="flex items-center gap-1 rounded-md p-1">
              <Annotate />
            </button>
            <button className="flex items-center gap-1 rounded-md p-1">
              <Comment />
            </button>
          </motion.div>
        </motion.div>
        <div className=""></div>
        <motion.div className="">
          <button className="flex items-center gap-1 rounded-md p-1">
            <Dev />
          </button>
        </motion.div>
      </motion.div>
    </main>
  );
}
