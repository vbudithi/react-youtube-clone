//This component handles two primary parts Sidebar and video feed

import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import { fetchFromAPI } from '../utils/FetchRouteAPI';
import React, { useEffect, useState } from 'react';


const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New");

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d',
                    px: { sx: 0, md: 2 }
                }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </Box>
            <Box
                p={3}
                sx={{
                    overflowY: 'auto',
                    height: '90vh',
                    flex: 2,
                    textAlign: 'center'
                }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    mb={2}
                    sx={{ color: 'white' }}
                >
                    {selectedCategory} <span style={{ color: '#F31503' }}>
                        Videos
                    </span>
                </Typography>
                <Videos videos={[]} />
            </Box>

            <Box>
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
            </Box>
        </Stack >
    )
}

export default Feed