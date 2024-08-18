// src/pages/GrandGuide/index.jsx
import React, { Suspense } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import FooterSection from "./FooterSection";
import GrandGuideSection from "./GrandGuideSection";
import { Box, SimpleGrid, Heading, Container, Image, Flex, Text } from "@chakra-ui/react";

const grandGuideGrid = [
    { userProfileImage: "images/img_g_pic.png", userContentImage: "images/img_g_cont.png" },
    { userProfileImage: "images/img_s_pic.png", userContentImage: "images/img_s_cont.png" },
    { userProfileImage: "images/img_m_pic.png", userContentImage: "images/img_m_marg.png" },
    { userProfileImage: "images/img_a_pic.png", userContentImage: "images/img_a_cont_m.png" },
    { userProfileImage: "images/img_m_pic_280x280.png", userContentImage: "images/img_m_marg_black_900_02.png" },
    { userProfileImage: "images/img_v_pic.png", userContentImage: "images/img_v_marg.png" },
];

export default function GrandGuidePage() {
    return (
        <>
            <Helmet>
                <title>Grand Fantasia Guide - Explore Fan-Wiki Knowledge</title>
                <meta
                    name="description"
                    content="Dive into the ultimate Grand Fantasia fan-wiki guide. Discover reliable knowledge, veteran tips, and strategies for every class, verified by our dedicated community."
                />
            </Helmet>
            <Box overflowX="scroll" bg="black.900_01" w="100%">
                <Box w="1920px">
                    <Flex gap="46px" zIndex={1} position="relative" flexDirection="column">
                        <Header />
                        <Flex ml="360px" mr="284px" gap="24px" alignItems="center">
                            <Flex flex={1} flexDirection="column">
                                <Heading size="heading2x1" as="h1" fontFamily="Chakra Petch" lineHeight="64px">
                                    <Heading size="heading2x1" as="span" color="white.a700">
                                        Sua&nbsp;
                                    </Heading>
                                    <Heading size="heading2x1" as="span" color="green.a700">
                                        Fan
                                    </Heading>
                                    <Heading size="heading2x1" as="span" color="white.a700">
                                        <>
                                            -Wiki
                                            <br />
                                            de&nbsp;
                                        </>
                                    </Heading>
                                    <Heading size="heading2x1" as="span" color="yellow.a700">
                                        Grand Fantasia!
                                    </Heading>
                                </Heading>
                                <Text
                                    fontSize="texts"
                                    color="teal.100"
                                    mt="14px"
                                    fontWeight={600}
                                    w="44%"
                                    lineHeight="24px"
                                    fontFamily="Chakra Petch"
                                >
                                    <Text fontSize="texts" as="span" color="white.a700">
                                        Explore uma vasta base de&nbsp;
                                    </Text>
                                    <Text fontSize="texts" as="span" color="green.a700">
                                        conhecimento
                                    </Text>
                                    <Text fontSize="texts" as="span" color="white.a700">
                                        &nbsp;feita por fãs de&nbsp;
                                    </Text>
                                    <Text fontSize="texts" as="span" color="yellow.a400">
                                        Grand Fantasia.
                                    </Text>
                                </Text>
                                <Image
                                    src="images/img_container.png"
                                    alt="Fantasia Image"
                                    h="410px"
                                    mt="38px"
                                    fit="cover"
                                />
                            </Flex>
                            <Image
                                src="images/img_image.png"
                                alt="Decorative Image"
                                h="644px"
                                mt="6px"
                                w="32%"
                                fit="contain"
                            />
                        </Flex>
                    </Flex>
                    <Box mt="-72px" position="relative">
                        <Flex mt="202px" flexDirection="column" alignItems="center">
                            <Box alignSelf="stretch">
                                <Box bg="gray.900_02" py="56px">
                                    <GrandGuideSection />
                                </Box>
                                <Image
                                    src="images/img_rectangle.png"
                                    alt="Secondary Image"
                                    h="96px"
                                    mt="-48px"
                                    position="relative"
                                    fit="cover"
                                    w="100%"
                                />
                            </Box>
                            <Container
                                pl="248px"
                                pr="56px"
                                mt="-14px"
                                position="relative"
                                display="flex"
                                flexDirection="column"
                                alignItems="start"
                            >
                                <Heading size="headinglg" as="h5" fontFamily="Chakra Petch" textAlign="center" lineHeight="49px">
                                    <>
                                        comece sua jornada com dicas
                                        <br />
                                        valiosas para cada classe!
                                    </>
                                </Heading>
                            </Container>
                        </Flex>
                        <SimpleGrid mt="78px" ml="114px" mr="98px" gap="94px" rowGap="38px" columns={3} justifyContent="center">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {grandGuideGrid.map((d, index) => (
                                    <UserProfile {...d} key={"mainGrid" + index} />
                                ))}
                            </Suspense>
                        </SimpleGrid>
                        <FooterSection />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
