import { Box, Flex, Link, Spacer, Text, Image, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg="teal.500" px={4} py={2} w="100%" maxW="1200px" mx="auto">
      <Flex align="center" wrap="wrap">
        <Image src="/images/logo.png" alt="Logo" boxSize="40px" mr={4} />
        <Text fontSize="md" color="white" ml={4}>
          Your go-to platform for trading Solana meme coins efficiently.
        </Text>
        <Text fontSize="xl" fontWeight="bold" color="white">
          Solana Meme Coin Trading Bot
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" color="white" mx={3} _hover={{ textDecoration: "none", color: "teal.300" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/dashboard" color="white" mx={3} _hover={{ textDecoration: "none", color: "teal.300" }}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/parameters" color="white" mx={3} _hover={{ textDecoration: "none", color: "teal.300" }}>
            Parameters
          </Link>
          <Link as={RouterLink} to="/realtime" color="white" mx={3} _hover={{ textDecoration: "none", color: "teal.300" }}>
            Real-Time Data
          </Link>
          <Button onClick={toggleColorMode} ml={4} colorScheme="teal">
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;