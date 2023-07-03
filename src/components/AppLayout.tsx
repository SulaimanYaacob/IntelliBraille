import { AppShell, Box } from "@mantine/core";
import React from "react";
import Header from "./Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell
      bg="white"
      padding={0}
      px="md"
      m="auto"
      w="600px"
      layout="alt"
      header={<Header />}
    >
      <Box py="xl" my="10vh">
        {children}
      </Box>
    </AppShell>
  );
};

export default AppLayout;
