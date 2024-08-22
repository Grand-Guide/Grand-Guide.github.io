import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile";
import FooterSection from "./FooterSection";
import GrandGuideSection from "./GrandGuideSection";
import { Box, SimpleGrid, Heading, Container, Image, Flex, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";

const grandGuideGrid = [
    { userProfileImage: "images/img_g_pic.png", userContentImage: "images/img_g_cont_m.png" },
    { userProfileImage: "images/img_s_pic.png", userContentImage: "images/img_s_cont_m.png" },
    { userProfileImage: "images/img_m_pic.png", userContentImage: "images/img_m_marg.png" },
    { userProfileImage: "images/img_a_pic.png", userContentImage: "images/img_a_cont_m.png" },
    { userProfileImage: "images/img_m_pic_280x208.png", userContentImage: "images/img_m_marg_black_900_02.png" },
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
            <Box overflowX="scroll" bg="black.900" w="100%">
                <Box w="1920px">
                    <Flex gap="46px" zIndex={1} position="relative" flexDirection="column">
                        <Header />
                        <Flex ml="360px" mr="284px" gap="24px" alignItems="center">
                            <Flex flex={1} flexDirection="column">
                                <Heading size="2xl" as="h1" fontFamily="Chakra Petch" lineHeight="64px">
                                    <span style={{ color: "white" }}>Sua&nbsp;</span>
                                    <span style={{ color: "green" }}>Fan</span>
                                    <span style={{ color: "white" }}>
                                        -Wiki
                                        <br />
                                        de&nbsp;
                                    </span>
                                    <span style={{ color: "yellow" }}>Grand Fantasia!</span>
                                </Heading>
                                <Text
                                    size="md"
                                    color="teal.100"
                                    mt="14px"
                                    fontWeight={600}
                                    w="44%"
                                    lineHeight="24px"
                                    fontFamily="Chakra Petch"
                                >
                                    <span style={{ color: "white" }}>Explore uma vasta base de&nbsp;</span>
                                    <span style={{ color: "green" }}>conhecimento</span>
                                    <span style={{ color: "white" }}> feita por fãs de&nbsp;</span>
                                    <span style={{ color: "yellow" }}>Grand Fantasia.</span>
                                </Text>
                                <Image src="images/img_container.png" alt="Fantasia Image" h="410px" mt="38px" fit="cover" />
                            </Flex>
                            <Image src="images/img_image.png" alt="Decorative Image" h="644px" mt="6px" w="32%" fit="contain" />
                        </Flex>
                        <Box mt="-72px" position="relative">
                            <Flex mt="202px" flexDirection="column" alignItems="center">
                                <Box alignSelf="stretch">
                                    <Box bg="gray.900" py="56px">
                                        {/* grand guide section */}
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
                                    <Heading size="lg" as="h5" fontFamily="Chakra Petch" textAlign="center" lineHeight="49px">
                                        Comece sua jornada com dicas
                                        <br />
                                        valiosas para cada classe!
                                    </Heading>
                                </Container>
                            </Flex>
                        </Box>
                        <SimpleGrid mt="78px" ml="114px" mr="98px" gap="94px" rowGap="38px" columns={3} justifyContent="center">
                            <Suspense fallback={<div>Loading feed...</div>}>
                                {grandGuideGrid.map((d, index) => (
                                    <UserProfile {...d} key={"mainGrid" + index} />
                                ))}
                            </Suspense>
                        </SimpleGrid>

                        {/* footer section */}
                        <FooterSection />
                    </Flex>
                </Box>
            </Box>
        </>
    );
}
