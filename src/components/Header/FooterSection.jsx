import { Text, Flex, Image, Box, Heading, Container } from "@chakra-ui/react";
import React from "react";

export default function FooterSection() {
    return (
        <>
            {/* footer section */}
            <Box mt="228px">
                <Flex bg="gray.900_01" justifyContent="center">
                    <Container mt="100px" display="flex" justifyContent="center" px="0px">
                        <Box w="100%">
                            <Flex mb="40px" alignItems="center">
                                <Flex gap="12px" flex={1} flexDirection="column" alignItems="start">
                                    <Text fontSize="md" fontFamily="Iceland">
                                        <Text as="span" color="white.a700">
                                            GG
                                        </Text>
                                        <Text
                                            as="span"
                                            color="transparent"
                                            bgGradient="radial-gradient(180deg, #00b74900, #00b749)"
                                            sx={{ backgroundClip: "text" }}
                                        >
                                            !
                                        </Text>
                                    </Text>
                                    <Box mb="12px" alignSelf="stretch">
                                        <Flex>
                                            <Text>Mini descrição 1</Text>
                                        </Flex>
                                        <Flex mb="12px">
                                            <Text>Mini descrição 2</Text>
                                        </Flex>
                                    </Box>
                                </Flex>
                                <Flex w="12%" justifyContent="center">
                                    <Flex mb="22px" gap="10px" w="100%" flexDirection="column" alignItems="end">
                                        <Heading size="sm" as="h6" fontFamily="Open Sans">
                                            Redes Sociais
                                        </Heading>
                                        <Image src="images/img_container_white_a700.svg" alt="Social Media Image" h="36px" w="100%" />
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Box>
                                <Flex gap="14px" flexDirection="column">
                                    <Flex>
                                        <Heading size="md" as="h6">
                                            Texto - 1
                                        </Heading>
                                    </Flex>
                                    <Flex mb="82px">
                                        <Text mb="14px">Mini descrição 4</Text>
                                    </Flex>
                                </Flex>
                            </Box>
                            <Flex gap="16px" flexDirection="column">
                                <Flex>
                                    <Heading size="md" as="h6">
                                        Texto - 5
                                    </Heading>
                                </Flex>
                                <Box mb="26px">
                                    <Flex mb="12px" gap="14px" flexDirection="column" py="12px">
                                        <Text mb="12px">Mini descrição 6</Text>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Box>
                    </Container>
                </Flex>
            </Box>
        </>
    );
}
