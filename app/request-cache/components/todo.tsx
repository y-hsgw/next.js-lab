import { useCallback, useEffect, useMemo } from "react";
import { getTodo } from "../api/get-todo";

export const Todo: React.FC = async () => {
  const item1 = await getTodo();
  const item2 = await getTodo();

  return (
    <div>
      <p>Todo</p>
    </div>
  );
};
