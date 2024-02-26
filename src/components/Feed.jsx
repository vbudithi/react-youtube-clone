//This component handles two primary parts Sidebar and video feed

import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';

function Feed() {
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d',
                    px: { sx: 0, md: 2 }
                }}>
                <Sidebar />

            </Box>
            <Typography
                className="copyright"
                variant="body2"
                align="center"
                sx={{
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: '#fff',
                    py: { sx: 1, md: 0 },
                    zIndex: 1000
                }}
            >
                Copyright@2023 CodeVivek. All rights reserved
            </Typography>
        </Stack >
    )
}

export default Feed
