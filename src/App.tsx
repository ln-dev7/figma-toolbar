import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Types
type IconComponent = React.FC<{ className?: string }>;

interface ToolbarButtonProps {
  icon: IconComponent;
  selected: boolean;
  onClick: () => void;
  showChevron?: boolean;
  isDev?: boolean;
}

interface ToolbarProps {
  devMode: boolean;
  selected: number;
  setSelected: (value: number) => void;
}

interface DevToggleProps {
  devMode: boolean;
  setDevMode: (value: boolean) => void;
  setSelected: (value: number) => void;
}

// Animations
const spring = {
  type: "spring" as const,
  stiffness: 250,
  damping: 25,
  duration: 0.3,
};

// Components
const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  icon: Icon,
  selected,
  onClick,
  showChevron = false,
  isDev = false,
}) => (
  <button
    className={`flex items-center justify-center ${
      showChevron ? "gap-1" : ""
    } h-full`}
    onClick={onClick}
  >
    <div
      className="flex items-center justify-center rounded-md p-1.5 relative w-8 h-8 shrink-0 duration-300 transition-colors"
      style={{
        color: selected ? "#FFF" : "#1A1A1A",
      }}
    >
      <Icon className="relative z-[2]" />
      {selected && (
        <motion.div
          className={`absolute inset-0 ${
            isDev ? "bg-[#00B75F]" : "bg-[#0092FF]"
          } rounded-md`}
          layoutId={isDev ? "indicator-dev" : "indicator"}
        />
      )}
    </div>
    {showChevron && <ChevronDown size={12} strokeWidth={1.5} />}
  </button>
);

const NormalToolbar: React.FC<
  Pick<ToolbarProps, "selected" | "setSelected">
> = ({ selected, setSelected }) => (
  <motion.div
    className="flex items-center justify-center p-2 gap-4 h-full"
    initial={{ opacity: 0, filter: "blur(4px)", y: 50 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    exit={{ opacity: 0, filter: "blur(4px)", y: -50 }}
    transition={{ delay: 0.15, ...spring }}
    key="normal"
  >
    <ToolbarButton
      icon={Pointer}
      selected={selected === 1}
      onClick={() => setSelected(1)}
      showChevron
    />
    <ToolbarButton
      icon={Frame}
      selected={selected === 2}
      onClick={() => setSelected(2)}
      showChevron
    />
    <ToolbarButton
      icon={Rectangle}
      selected={selected === 3}
      onClick={() => setSelected(3)}
      showChevron
    />
    <ToolbarButton
      icon={Pen}
      selected={selected === 4}
      onClick={() => setSelected(4)}
      showChevron
    />
    <ToolbarButton
      icon={Text}
      selected={selected === 5}
      onClick={() => setSelected(5)}
    />
    <ToolbarButton
      icon={Comment}
      selected={selected === 6}
      onClick={() => setSelected(6)}
    />
    <ToolbarButton
      icon={Actions}
      selected={selected === 7}
      onClick={() => setSelected(7)}
    />
  </motion.div>
);

const DevToolbar: React.FC<Pick<ToolbarProps, "selected" | "setSelected">> = ({
  selected,
  setSelected,
}) => (
  <motion.div
    className="flex items-center justify-center p-2 gap-4 h-full"
    initial={{ opacity: 0, filter: "blur(4px)", y: -50 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    exit={{ opacity: 0, filter: "blur(4px)", y: 50 }}
    transition={{ delay: 0.15, ...spring }}
    key="dev"
  >
    <ToolbarButton
      icon={Pointer}
      selected={selected === 1}
      onClick={() => setSelected(1)}
      isDev
    />
    <ToolbarButton
      icon={Measure}
      selected={selected === 2}
      onClick={() => setSelected(2)}
      isDev
    />
    <ToolbarButton
      icon={Annotate}
      selected={selected === 3}
      onClick={() => setSelected(3)}
      isDev
    />
    <ToolbarButton
      icon={Comment}
      selected={selected === 4}
      onClick={() => setSelected(4)}
      isDev
    />
  </motion.div>
);

const Toolbar: React.FC<ToolbarProps> = ({
  devMode,
  selected,
  setSelected,
}) => (
  <AnimatePresence mode="wait">
    <motion.div
      className="h-12"
      initial={{ width: devMode ? 192 : 400 }}
      animate={{ width: devMode ? 192 : 400 }}
      exit={{ width: devMode ? 192 : 400 }}
      transition={{ delay: 0.1, ...spring }}
    >
      {!devMode ? (
        <NormalToolbar selected={selected} setSelected={setSelected} />
      ) : (
        <DevToolbar selected={selected} setSelected={setSelected} />
      )}
    </motion.div>
  </AnimatePresence>
);

const DevToggle: React.FC<DevToggleProps> = ({
  devMode,
  setDevMode,
  setSelected,
}) => (
  <div className="pl-2 pr-3 py-2.5 flex items-start h-12">
    <button
      className="flex items-center justify-start gap-1 rounded-md p-0.5 w-12 h-full shrink-0"
      style={{
        backgroundColor: devMode ? "#00B75F" : "#F5F5F5",
        justifyContent: devMode ? "flex-end" : "flex-start",
      }}
      onClick={() => {
        setDevMode(!devMode);
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
);

const App: React.FC = () => {
  const [devMode, setDevMode] = useState(false);
  const [selected, setSelected] = useState(1);

  return (
    <main className="relative w-full min-h-screen flex items-center justify-center px-4 py-10 bg-[#f5f5f5]">
      <motion.div
        className="shadow-box rounded-xl flex items-center gap-1.5 bg-white overflow-hidden"
        transition={spring}
      >
        <Toolbar
          devMode={devMode}
          selected={selected}
          setSelected={setSelected}
        />
        <div className="bg-[#E6E6E6] w-[1px] self-stretch" />
        <DevToggle
          devMode={devMode}
          setDevMode={setDevMode}
          setSelected={setSelected}
        />
      </motion.div>
    </main>
  );
};

export default App;
