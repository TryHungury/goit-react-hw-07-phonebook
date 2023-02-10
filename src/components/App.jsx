import styled from "styled-components";
import { Box } from "./box/Box";
import { PhoneBook } from "./phonebook/PhoneBook";
import { Contacts } from "./contacts/Contacts";

const Title = styled.h1`
  border-radius: ${p=>p.theme.radii.normal};
  background-color: ${p=>p.theme.colors.text};
  color: ${p=>p.theme.colors.accent};
  margin: ${p=>p.theme.space[0]}px auto;
  padding: ${p=>p.theme.space[2]}px;
  margin-top: ${p=>p.theme.space[3]}px;
  font-weight: ${p=>p.theme.fontWeights.bold};
  font-family: ${p=>p.theme.fonts.monospace};
`

const TitleH2 = styled.h2`
  text-align: center;
  border-radius: ${p=>p.theme.radii.normal};
  background-color: ${p=>p.theme.colors.accent};
  margin: ${p=>p.theme.space[0]}px auto;
  padding: ${p=>p.theme.space[2]}px;
  margin-top: ${p=>p.theme.space[5]}px; 
  font-weight: ${p=>p.theme.fontWeights.heading};
  font-family: ${p=>p.theme.fonts.heading};
`

export const App = () => {
    return (
      <Box height= "100%"  display= "flex" flexDirection="column" justifyContent= "space-evenly" alignItems= "center" fontSize= "40px" backgroundColor="backgroundSecondary">
        <Title>Ukraine Win❤️</Title>
        <Box display="flex" flexDirection="column" justifyContent= "space-evenly" alignItems= "center" as={"section"}>
          <TitleH2>Phonebook</TitleH2>
          <PhoneBook></PhoneBook>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent= "space-evenly" alignItems= "center" as={"section"}>
          <TitleH2>Contacts</TitleH2>
          <Contacts></Contacts>
        </Box>
      </Box>
    );
  }