import { Box, Heading, Text, VStack, Image, Button } from "@chakra-ui/react";
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <Box role="alert">
    <Text>Something went wrong:</Text>
    <Text>{error.message}</Text>
    <Button onClick={resetErrorBoundary}>Try again</Button>
  </Box>
);

const About = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box p={4}>
        <VStack spacing={4}>
          <Heading>About Solana Meme Coin Trading Bot</Heading>
          <Text>
            This application helps you trade meme coins on the Solana blockchain with ease and efficiency. Navigate through the dashboard, set your trading parameters, and monitor real-time data.
          </Text>
          <Image src="/images/about-image.jpg" alt="About Image" borderRadius="md" />
        </VStack>
      </Box>
    </ErrorBoundary>
  );
};

export default About;