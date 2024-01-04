import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Text, Flex } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';

export default function Dashboard() {
  const navigate = useNavigate(); // Create navigate function


  return (
    <Flex justify="space-between" align="center">
        <Text fz="2.25rem" fw="600" lh="2.75rem">
          Dashboard
        </Text>
        <Button bg="#005FB8" size="md" onClick={() => navigate('/showInfo')}>
            Show Info
            <IconArrowRight size="1.25rem" />
        </Button>
      </Flex>
  );
}
