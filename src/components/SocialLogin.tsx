import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  const kakaoParms = {
    client_id: "f95c84289d20ccb996c828f17c1798d2",
    redirect_uri: "http://127.0.0.1:3000/sotial/kakao",
    response_type: "code",
  };
  const parmas = new URLSearchParams(kakaoParms).toString();
  return (
    <Box mb={4}>
      <Divider />
      <HStack my={8}>
        <Divider />
        <Text
          textTransform={"uppercase"}
          color="gray.500"
          fontSize={"xs"}
          as="b"
        >
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=c3dc30dd45540ec5a695&scope=read:user,user:email"
          w="100%"
          leftIcon={<FaGithub />}
        >
          Continue with Github
        </Button>
        <Button
          as="a"
          href={`https://kauth.kakao.com/oauth/authorize?${parmas}`}
          w="100%"
          leftIcon={<FaComment />}
          colorScheme={"yellow"}
        >
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
