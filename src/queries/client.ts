import { QueryClient } from "react-query";

export function configureQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {},
      queries: {},
    },
  });
  return queryClient;
}
