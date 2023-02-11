import { Box } from "components/box/Box"
import LoaderWrapper from "components/loader/Loader"
import { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
// import { contactsListDeleteAction } from "redux/contacts/contacts.slice"
import { deleteContactsThunk, fetchContactsThunk } from "redux/contacts/contacts.thunk"
import { filterAction } from "redux/filter/filter.slice"
import styled from "styled-components"

const Label = styled.label`
  text-align: center;
  border-radius: ${p=>p.theme.radii.normal};
  border: ${p=>p.theme.borders.none};
  background-color: ${p=>p.theme.colors.text};
  color: ${p=>p.theme.colors.accent};
  padding: ${p=>p.theme.space[3]}px;
  font-weight: ${p=>p.theme.fontWeights.body};
  font-family: ${p=>p.theme.fonts.heading};
  font-size: ${p=>p.theme.fontSizes[4]}px;
`

const FilterInput = styled.input`
  min-width: 500px;
  text-align: center;
  border-radius: ${p=>p.theme.radii.normal};
  border: ${p=>p.theme.borders.none};
  padding: ${p=>p.theme.space[4]}px;
  margin-left: ${p=>p.theme.space[4]}px; 
  font-weight: ${p=>p.theme.fontWeights.body};
  font-family: ${p=>p.theme.fonts.body};
  font-size: ${p=>p.theme.fontSizes[4]}px;
`

const ContactsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  border-radius: ${p=>p.theme.radii.normal};
  border: ${p=>p.theme.borders.none};
  background-color: ${p=>p.theme.colors.accent};
  color: ${p=>p.theme.colors.text};
  padding: ${p=>p.theme.space[3]}px;
  margin-top: ${p=>p.theme.space[3]}px;
  font-weight: ${p=>p.theme.fontWeights.body};
  font-family: ${p=>p.theme.fonts.heading};
  font-size: ${p=>p.theme.fontSizes[5]}px;
`

const DeleteContactBtn = styled.button`
  text-align: center;
  border-radius: ${p=>p.theme.radii.normal};
  border: ${p=>p.theme.borders.none};
  background-color: ${p=>p.theme.colors.backgroundSecondary};
  color: ${p=>p.theme.colors.accent};
  padding: ${p=>p.theme.space[4]}px;
  margin-left: ${p=>p.theme.space[4]}px;
  font-weight: ${p=>p.theme.fontWeights.body};
  font-family: ${p=>p.theme.fonts.body};
  font-size: ${p=>p.theme.fontSizes[4]}px;
  cursor: pointer;
  transition: background-color linear 500ms,
  color linear 500ms;
  
  &:hover, &:focus {
    background-color: ${p=>p.theme.colors.text};
    color: ${p=>p.theme.colors.accent};
  }
`

export const Contacts = () => {
  const filter = useSelector(state => state.filter.filter)
  const contacts = useSelector(state => state.contacts)
  const isLoading = useSelector(state => state.contacts.isLoading)
  const error = useSelector(state => state.contacts.error)
  const dispatch = useDispatch()
  
  const handleFilterContacts = (e) => {
    const filterValue = e.target.value;
    
    dispatch(filterAction(filterValue))
  }

  const handleDeleteContact = (id) => {

    // dispatch(contactsListDeleteAction(id))

    dispatch(deleteContactsThunk(id))
  }

  useEffect(()=>{
    // if (!!contacts.items.length){

      dispatch(fetchContactsThunk())
    // }
    // return

  },[dispatch])

  const visibleContacts = useMemo(()=>{ 
    const filterNormalize = filter.toLowerCase();
      return contacts.items.filter(({name}) => {
        if(!!name){
          return name.toLowerCase().includes(filterNormalize)
        }
        return false;
      }
      )
    }, [contacts, filter]) 

    return (
      <>
      {error && <Box p={3} pt={5}>{error}</Box>}
    <Box  display= "flex" flexDirection="column" justifyContent= "space-evenly" alignItems= "center" p="0" as={"ul"}>
        {isLoading && <Box p={3} pb={5}>{LoaderWrapper()}</Box>}
        <Box style={{listStyle: "none"}} display="flex" justifyContent= "center" alignItems= "center" as={"li"}>
            <Label>Find contacts by name<FilterInput placeholder="pls input name, which you want search..." name="filter" value={filter} onChange={handleFilterContacts}></FilterInput></Label>
        </Box>
        {visibleContacts.map(({id, name, phone})=>{
            return <ContactsItem key={id}>{name}: {phone}<DeleteContactBtn type="button" onClick={()=>handleDeleteContact(id)}>Delete</DeleteContactBtn></ContactsItem>
        })}
    </Box>
      </>
    )
} 

