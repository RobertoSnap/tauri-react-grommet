import React, { useEffect } from 'react';
import { Heading, Text, Box } from 'grommet';

interface Props { }

export const HomePage: React.FC<Props> = () => {

    useEffect(() => {
        document.title = "Tauri | Home"
    }, []);

    return (
        <Box>
            <Heading level={3}>Welcome to Tauri</Heading>
            <Text >Does this auto reload:1</Text>
        </Box>
    )
}