import React, { useEffect } from 'react';
import { Box, Text } from 'grommet';

interface Props {
    folders: string[]
}

export const ShowFolders: React.FC<Props> = ({ folders }) => {
    useEffect(() => {
        console.log("Show folders got => ", folders);

    }, [folders])

    const formatFolder = (path: string) => {
        return "..." + path.substring(path.lastIndexOf("/"), path.length)
    }

    return (
        <Box>
            {folders.map(folder => (
                <Text>{formatFolder(folder)}</Text>
            ))}
        </Box>
    )
}