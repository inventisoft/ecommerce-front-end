
import React from "react";
import { Box, Button, Typography } from '@mui/material';

function  ItemCarouselDetail ({theme, activeStep,slider}) {
    
    return(
        <>
        <Box sx={{ minWidth:'180px', width:'50%',maxWidth:'400px', position:'absolute', top: '56px'}}>
            <Box
            color={theme.palette.grey.main}
            sx={{
                display: { xs: 'flex', sm: 'none', md: 'none' },
                height:'236px',
                minWidth:'180px',
                textAlign:'center',
                flexDirection:'column',
                justifyContent:'center',
                borderRadius:'0 50% 50% 0',
                background:'rgba(255,255,255,0.4)',
                padding:'10px 0',
                
            }}
            >
                <Typography
                    fontFamily={theme.typography.primary}
                    sx={{
                    display:'block',
                    padding:'5px 24px 5px 16px',
                    }}
                >
                    {slider[activeStep].name}
                </Typography>

                <Typography 
                    sx={{
                        display:'block',
                    padding:'5px 24px 5px 16px',
                    }}
                    fontFamily={theme.typography.secondary}
                >
                    {slider[activeStep].detalle}
                </Typography>
                <div>
                    <Button
                        color='grey'
                        sx={{
                        display: 'inline-flex',
                        margin:'5px 24px 5px 12px',
                        }}
                        variant="outlined" size="small"
                    >
                        <Typography variant="caption">
                            {slider[activeStep].boton1}
                        </Typography>
                    </Button>
                </div>
            </Box>
        </Box>    
        <Box sx={{ minWidth:'180px', width:'50%',maxWidth:'400px', position:'absolute', top: '64px'}}>
        <Box
            color={theme.palette.grey.main}
            sx={{
                display: { xs: 'none', sm: 'flex', md: 'none' },
                height:'316px',
                textAlign:'center',
                flexDirection:'column',
                justifyContent:'center',
                borderRadius:'0 50% 50% 0',
                background:'rgba(255,255,255,0.4)',
                padding:'10px 0',
            }}
            >
                <Typography 
                    
                    fontFamily={theme.typography.primary2}
                    sx={{
                    display:'block',
                    padding:'12px 24px 12px 16px',
                    }}
                >
                    {slider[activeStep].name}
                </Typography>
                <Typography 
                    sx={{
                    display:'block',
                    padding:'12px 24px 12px 16px',
                    }}
                    fontFamily={theme.typography.secondary2}
                >
                    {slider[activeStep].detalle}
                </Typography>

                <div>
                <Button
                    color='grey'
                    sx={{
                    display: 'inline-flex',
                    margin:'12px 24px 12px 12px',
                    }}
                    variant="outlined" size="medium"
                >
                    <Typography variant="caption">{slider[activeStep].boton1}</Typography>
                </Button>
                
                </div>
            </Box>
        </Box>    
            
        
        <Box sx={{ minWidth:'180px', width:'50%',maxWidth:'400px', position:'absolute', top: '68.5px'}}>
            <Box
            color={theme.palette.grey.main}
            sx={{
                display:{xs: 'none', sm: 'none', md: 'flex' },
                height:'404px',
                textAlign:'center',
                flexDirection:'column',
                justifyContent:'center',
                borderRadius:'0 50% 50% 0',
                background:'rgba(255,255,255,0.4)',
                padding:'10px 0',
            }}
            >
                <Typography 
                    
                    fontFamily={theme.typography.primary3}
                    sx={{
                    display:'block',
                    padding:'16px 24px 16px 16px',
                    }}
                >
                    {slider[activeStep].name}
                </Typography>
                <Typography 
                    sx={{
                    display:'block',
                    padding:'16px 24px 12px 16px',
                    }}
                    fontFamily={theme.typography.secondary3}
                >
                    {slider[activeStep].detalle}
                </Typography>
                <div>
                    <Button
                        color='grey'
                        sx={{
                        display:'inline-flex',
                        margin:'16px 24px 16px 12px',
                        }}
                        variant="outlined" size="large"
                    >
                        <Typography variant="caption">{slider[activeStep].boton1}</Typography>
                    </Button>
                </div>
            </Box>
        </Box>   
        </>
    )
}
export {ItemCarouselDetail}

