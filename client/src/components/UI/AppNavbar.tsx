import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { SlLogout } from 'react-icons/sl';
import { NavLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import ThemeSwither from './ThemeSwither';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { logoutUserThunk } from '../../features/redux/thunkActions/userThunkActions';

export default function AppNavBar(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userDadta = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} rounded="lg" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>
            <span>EXAM</span>
          </Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {userDadta.status !== 'success' ? (
              <>
                <NavLink to="/signin" className={({ isActive }) => (isActive ? 'underline' : '')}>
                  signin
                </NavLink>
                <NavLink to="/signup" className={({ isActive }) => (isActive ? 'underline' : '')}>
                  signup
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'underline' : '')}>
                  Home
                </NavLink>
                <NavLink to="/bad" className={({ isActive }) => (isActive ? 'underline' : '')}>
                  BadPage
                </NavLink>
              </>
            )}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <ThemeSwither />
          {userDadta.status === 'success' && (
            <>
              <span className="mx-5">Привет, {userDadta.user.name}</span>
              <Button
                onClick={() => void dispatch(logoutUserThunk())}
                colorScheme="orange"
                variant="outline"
              >
                <SlLogout />
              </Button>
            </>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <NavLink to="/">Home</NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
