import { auth } from "@clerk/nextjs";

export const getIsAdmin = () => {
  const { userId } = auth();
  const adminIds = "user_2hVjgn2c8qs65s9HiyYrIpcAkgR";

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};