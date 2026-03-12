import React from 'react';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { useRouter } from 'expo-router';
import {Center} from "@/components/ui/center";

export default function Home() {
  const router = useRouter();

  return (
    <Box className="flex-1 bg-background-300 h-[100vh]">
      <Center className="h-full">
        <Button
            size="md"
            className="bg-primary-500 px-6 py-2 rounded-full"
            onPress={() => {
              router.push('/tabs/home');
            }}
        >
          <ButtonText>Explore Tab Navigation</ButtonText>
        </Button>
      </Center>
    </Box>
  );
}
