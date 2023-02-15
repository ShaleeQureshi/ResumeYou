import React, { useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";

const override: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
};

const Spinner = () => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <HashLoader
      cssOverride={override}
      size={50}
      color={"#123abc"}
      loading={loading}
    />
  );
};

export default Spinner;
