import React, { useState, useEffect } from 'react';
import { Box, Button } from 'grommet';
import { ShowFolders } from './ShowFolders';
const dialog = require('tauri/api/dialog');

interface Props { }


export const SelectFolder: React.FC<Props> = () => {

    const [folders, setFolders] = useState<string[]>();
    useEffect(() => {
        if (folders) {
            console.log("selected", folders);
        }
    }, [folders])

    const handleSelectFolder = async () => {
        const folders = await dialog.open({ multiple: true, filter: "folder" })
        setFolders(folders)
    }

    return (
        <Box>
            <Box>
                <Button label="Add project folder" onClick={(e) => handleSelectFolder()}></Button>
            </Box>
            {folders &&
                <ShowFolders folders={folders}></ShowFolders>
            }
        </Box>
    )
}