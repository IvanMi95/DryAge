import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const Footer = () => {

  const FooterBox = styled(Box)(() => ({
    height: '10%',
    width: '100%',
  }));
  return(
    <FooterBox>
    Footer
    </FooterBox>
  )
}