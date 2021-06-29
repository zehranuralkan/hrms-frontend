import React, {useState,useEffect} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import UserService from '../services/userService';

export default function UserList() {
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    //komponent yüklendiğinde yapılması gerkeen komut
    let userService=new UserService()
    userService.getUser().then(result=>setUsers(result.data.data))
  })

    return (
        <div>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>E Mail</Table.HeaderCell>
        <Table.HeaderCell>Şifre</Table.HeaderCell>
       
      
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            users.map(users=>(
                <Table.Row>
                
                <Table.Cell>{users.email}</Table.Cell>
                <Table.Cell>{users.password}</Table.Cell> 
               
              </Table.Row>
            ))
        }
    
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
        </div>
    )
}
