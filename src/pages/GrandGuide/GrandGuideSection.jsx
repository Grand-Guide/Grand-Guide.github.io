import { Text, Heading, Flex } from "@chakra-ui/react";
import React from "react";

export default function GrandGuideSection() {
    return (
        <>
            {/* grand guide section */}
            <Flex mt="12px" alignItems="start" px="26px">
                <Flex flex={1} alignItems="center" px="30px">
                    <Flex gap="14px" w="46%" flexDirection="column">
                        <Heading
                            size="headingxl"
                            color="light_blue.a200"
                            ml="52px"
                            fontFamily="Chakra Petch"
                            textAlign="center"
                            lineHeight="50px"
                        >
                            <Heading size="headingxl" as="span" color="yellow.a700">
                                <>
                                2024
                                <br />
                                </>
                            </Heading>
                            <Heading size="headingxl" as="span" color="green.a700">
                                Dados Registrados
                            </Heading>
                        </Heading>
                        <Text
                            size="texts"
                            color="cyan.50"
                            textAlign="center"
                            lineHeight="24px"
                        >
                            Com a colaboração de servidores privados e o apoio de fãs ao redor do mundo, criamos uma base sólida e confiável.
                        </Text>
                    </Flex>
                    <Flex
                        gap="12px"
                        flex={1}
                        flexDirection="column"
                        alignItems="center"
                        px="56px"
                    >
                        <Heading
                            size="headingxl"
                            as="h4"
                            color="light_blue.a200"
                            fontFamily="Chakra Petch"
                            textAlign="center"
                            lineHeight="50px"
                        >
                            <Heading size="headingxl" as="span" color="yellow.a700">
                                2024
                                <br />
                            </Heading>
                            <Heading size="heading" as="span" color="green.a700">
                                Dados Confirmados
                            </Heading>
                        </Heading>
                        <Text
                            size="texts"
                            color="cyan.50"
                            textAlign="center"
                            alignSelf="stretch"
                            lineHeight="24px"
                        >
                            Dados verificados e validados pela equipe de análise, assegurando a precisão e a confiança em cada detalhe.
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                    gap="16px"
                    w="32%"
                    flexDirection="column"
                    alignItems="end"
                >
                    <Heading
                        size="lheadingxl"
                        as="h4"
                        color="light_blue.a200"
                        mr="60px"
                        fontFamily="Chakra Petch"
                        textAlign="center"
                        lineHeight="50px"
                    >
                        <Heading size="headingxl" as="span" color="yellow.a700">
                            2024
                            <br />
                        </Heading>
                        <Heading size="headingxl" as="span" color="green.a700">
                            Guias Veteranos
                        </Heading>
                    </Heading>
                    <Text
                        fontSize="md"
                        color="cyan.50"
                        textAlign="center"
                        alignSelf="stretch"
                        lineHeight="24px"
                    >
                        Dicas e estratégias fornecidas por jogadores experientes, com anos de conhecimento e prática, oferecendo dicas valiosas.
                    </Text>
                </Flex>
            </Flex>
        </>
    );
}
