import { Cow } from "../../types/@databasetypes"
import { CowCard } from "../cow/CowCard"
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';


export const Home = () => {
  const cow: Cow = {
    name: "Cow",
    description: "Dato il clima della zona di origine della razza, questa ha subito un processo di selezione naturale, facendo in modo che la razza highland possa resistere persino alle temperature glaciali dell'Alaska (-40 °C), e possa rimanere in alta quota anche durante le stagioni più fredde. La razza highland è anche per questo motivo spesso confusa con lo yak tibetano."
  }
  const cows = []
  for (let index = 0; index < 10; index++) {
    cows.push(cow)

  }
  return (
      <Box sx={{ width: '100%' }}>
        <Stack 
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
        >
          {cows.map((cow: Cow) => {
            return <CowCard cow={cow} />
          })}
        </Stack>
      </Box>
  )
}