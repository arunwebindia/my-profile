import React from 'react'
import { Box } from '@mui/material';
export default function Sidebar() {
    return (
        <>
            <Box sx={{ width: "250px", position: 'fixed', left: 0, top: 0, height: '100vh', border: '.5px solid lightgray',padding:'1rem' }} className="sidebar-wrapper">
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',alignItems:'center', height: '100%', width: '100%' }}>
                    <Box>
                        <img src="" alt="Arun Singh" />
                    </Box>
                    <Box>
                        <div className="">Home</div>
                        <div className="">About</div>
                        <div className="">Project</div>
                        <div className="">Blog</div>
                        <div className="">Contact</div>
                    </Box>
                    <Box>
                        <Box sx={{display:"block"}}>Copyright c 2024 Arun</Box>
                        <Box sx={{display:"block"}}>Elisc. All rights reserved.</Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}
