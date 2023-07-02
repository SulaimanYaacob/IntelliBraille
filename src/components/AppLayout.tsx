import { AppShell, Box } from "@mantine/core";
import React from "react";
import Header from "./Header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell padding={0} m="auto" w="600px" layout="alt" header={<Header />}>
      <Box py="xl" my="10vh">
        {children}
      </Box>
    </AppShell>
  );
};

export default AppLayout;
