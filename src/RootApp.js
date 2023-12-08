import React, { useEffect } from "react";
import  RootNavigator from "@app/navigation";
import useCachedResources from "./hooks/useCachedResources";
import Spinners from "./components/common/Spinner";

export default function App() {
  const isLoadingComplete = useCachedResources();
  return (
    <>
      {!isLoadingComplete && <Spinners status={true} size="lg" />}
      {isLoadingComplete && <RootNavigator />}
    </>
  );
}
