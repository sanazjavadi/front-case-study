import { Flex, Loader } from "@mantine/core";

export const Spinner = () => {
  return (
    <Flex mih={100} justify="center" align="center">
      <Loader color="blue" />
    </Flex>
  );
};
