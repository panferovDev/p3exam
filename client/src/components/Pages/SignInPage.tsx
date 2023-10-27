import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

export default function SignInPage(): JSX.Element {
  return (
    <div className="flex justify-center mt-5">
      <Box bg={useColorModeValue('', 'gray.900')} w="lg" p={8} borderRadius="md">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          align="center"
          mb={4}
          color={useColorModeValue('gray.900', 'gray.100')}
        >
          Sign In
        </Text>

        <VStack spacing={4}>

          <FormControl isRequired>
            <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Email</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              bg={useColorModeValue('gray.100', 'gray.900')}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel color={useColorModeValue('gray.900', 'gray.100')}>Password</FormLabel>
            <Input
              type="password"
              placeholder="Password"
              bg={useColorModeValue('gray.100', 'gray.900')}
            />
            <Text mt={1} color={useColorModeValue('gray.900', 'gray.100')}>
              At least 8 characters long
            </Text>
          </FormControl>

          <Button colorScheme="blue" w="full" mt={4}>
            Create Account
          </Button>

        </VStack>
      </Box>
    </div>
  );
}
