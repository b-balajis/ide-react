import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("tomorrow_night");
  const [fontFamily, setFontFamily] = useState("Consolas");
  const [fontSize, setFontSize] = useState(24);
  const [wrap, setWrap] = useState(true);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [alignment, setAlignment] = useState("right");
  const [language, setLanguage] = useState("python");

  const [code, setCode] = useState("");
  const [stdIn, setStdIn] = useState("");
  const [output, setOutput] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [headTags, setHeadTags] = useState("");
  const [cssFramework, setCssFramework] = useState("none");
  const [error, setError] = useState("");

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        fontFamily,
        setFontFamily,
        fontSize,
        setFontSize,
        wrap,
        setWrap,
        showLineNumbers,
        setShowLineNumbers,
        alignment,
        setAlignment,
        language,
        setLanguage,
        code,
        setCode,
        stdIn,
        setStdIn,
        output,
        setOutput,
        isSubmitting,
        setIsSubmitting,
        headTags,
        setHeadTags,
        cssFramework,
        setCssFramework,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useEditor = () => useContext(AppContext);
