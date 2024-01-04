import React, { useState } from 'react';
import { AppShell, Burger, Group, NavLink } from '@mantine/core';
import { IconHome2 } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import { Text } from '@mantine/core';
import { useNavigate, useParams } from 'react-router-dom';
import '@mantine/core/styles.css';
import Dashboard from './dashboard';
import MyCrops from './myCrops';
import StoreInFirebase from './storeInFirebase';

const navbar = [
  { label: 'Dashboard', href: '/dashboard', icon: <IconHome2 size="1rem" stroke={1.5} /> },
  { label: 'My Crops', href: '/myCrops', icon: <IconHome2 size="1rem" stroke={1.5} /> },
  { label: 'Store', href: '/storeInFirebase', icon: <IconHome2 size="1rem" stroke={1.5} /> },
];

function MainAppShell({ children }) {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const [active, setActive] = useState(0); // Set the active NavLink index to 0 by default

  const links= navbar.map((item, index) => (
    <NavLink
      key={index}
      href={item.href}
      label={item.label}
      active={index === active}
      leftSection={item.icon}
      onClick={(event) => {
        event.preventDefault()
        navigate(item.href)
        setActive(index)
      }}
    />
  ))
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text size="lg" fw={500}>
            Logo
          </Text>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" style={{ gap: '10px' }}>
        {links}
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

export default MainAppShell;
