import { QueryClient } from "react-query";

export default function configureQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {},
      queries: {},
    },
  });
  return queryClient;
}
