// src/lib/firebaseUtils.ts
import { getAuth } from "firebase/auth";

export const getCurrentUserEmail = (): string | null => {
  const auth = getAuth();
  return auth.currentUser?.email || null;
};
