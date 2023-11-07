"fad82e5e-b9df-43e5-a88d-37cb39941711"

"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fad82e5e-b9df-43e5-a88d-37cb39941711");
  }, []);

  return null;
};