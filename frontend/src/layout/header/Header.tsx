import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import NightModeToggle from '../../components/NightModeToggle';

const HeaderBox = styled(Box)(() => ({
  height: '10%',
  width: '100%',
}));
export const Header = () => {

  return (
    <HeaderBox>
      <NightModeToggle />
    </HeaderBox>
  )
}