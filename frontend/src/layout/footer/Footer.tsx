import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const Footer = () => {

  const FooterBox = styled(Box)(() => ({
    height: '10vh',
    width: '100vw',
  }));
  return(
    <FooterBox>
    Footer
    </FooterBox>
  )
}