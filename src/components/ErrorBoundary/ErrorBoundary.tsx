import { Component, type ReactNode } from "react";
import { Card, Title, Text, Button, Center, Stack, Flex } from "@mantine/core";
import styles from "./ErrorBoundary.module.scss";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  navigate?: (path: string) => void;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: undefined });
  };

  handleGoHome = () => {
    this.setState({ hasError: false, error: undefined }, () => {
      this.props.navigate?.("/"); // or your HOME_PATH constant
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Center className={styles["errorBoundary"]}>
          <Card
            shadow="md"
            padding="xl"
            radius="md"
            className={styles["errorBoundary__errorContainer"]}
          >
            <Stack>
              <Title order={2}>Oops! Something went wrong</Title>
              <Text>{this.state.error?.message}</Text>
              <Flex gap="md" justify="center">
                <Button color="red" onClick={this.handleReload}>
                  Try Again
                </Button>
                <Button color="blue" onClick={this.handleGoHome}>
                  Go Home
                </Button>
              </Flex>
            </Stack>
          </Card>
        </Center>
      );
    }

    return this.props.children;
  }
}
