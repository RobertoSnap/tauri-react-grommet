import React from 'react';
import { Heading, Box } from 'grommet';
import { SelectFolder } from '../components/files/SelectFolders';
// import { setTitle } from 'tauri/api/window'
// const twindow = require('tauri/api/window');
// const dialog = require('tauri/api/dialog');
// const fs = require('tauri/api/fs');

interface Props { }

export const HomePage: React.FC<Props> = () => {
    return (
        <Box>
            <Heading level={3}>Home page </Heading>
            <SelectFolder></SelectFolder>
        </Box>
    )
}