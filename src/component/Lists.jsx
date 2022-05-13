import React,{useState} from 'react'
import {Card,Box,Container,Typography,Input,List, ListItem,Button,Checkbox, ListItemText,IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const ariaLabel = { 'aria-label': 'description' };

const Lists = () => { 
  const [todo,setTodo] = useState(["방청소하기","정보처리기사 실기공부","화장대 정리하기"]);
  const [input, setInput] = useState("");
  const [del ,setDel] = useState("");
const handler =(e)=>{
  setInput(e.target.value);
}
const update = ()=>{
  setTodo((prevState)=>{
    return [input,...prevState]
  })
}


  return (
  <>
  <Container>
    <Box sx={{paddingTop:"20px", paddingBottom: "20px"}}>
        <Typography variant='h3' sx={{textAlign : "center"}}>
            Todo List
        </Typography>
    </Box>
  
  <Input inputProps={ariaLabel} placeholder="New todo" value={input} onChange={handler} sx={{width:"88%",marginTop:"20px"}}/>
  <Button onClick={update} sx={{fontWeight: "bold"}}>등록</Button>
  {todo.map((todo,index)=>{
    return <Card key={index} sx={{marginBottom:"30px",marginTop:"50px"}} >
   <List>
    <ListItem><Checkbox size="small" />
     <ListItemText sx={{textAlign:"center"}} >{todo}</ListItemText>
     <IconButton aria-label='edit'><EditIcon/></IconButton>
     <IconButton aria-label="delete"><DeleteIcon /></IconButton>
     </ListItem>
   </List>
  </Card>
  })}
    </Container>
  </>
  )
}

export default Lists;