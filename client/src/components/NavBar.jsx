import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { MoonIcon, PlusSquareIcon, SunIcon } from "@chakra-ui/icons";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <Container maxW={"1140px"} p={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text fontSize={22} fontWeight={"bold"}>
          <Link to={"/"}>Book Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Button onClick={() => navigate("/create")}>
            <PlusSquareIcon fontSize={20} />
          </Button>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default NavBar;
