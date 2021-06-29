import React, {useState,useEffect} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import BackgroundService from '../services/backgroundService';

export default function BackgroundList() {

  const[backgrounds,setBackgrounds]=useState([]);
  useEffect(()=>{
    //komponent yüklendiğinde yapılması gerkeen komut
    let backgroundService=new BackgroundService()
   backgroundService.getBackground().then(result=>setBackgrounds(result.data.data)) })

    return (
    
        <div>
           <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Fotoğraf Url</Table.HeaderCell>
        <Table.HeaderCell>Github</Table.HeaderCell>
        <Table.HeaderCell>Linkedin</Table.HeaderCell>
        <Table.HeaderCell>Ön Yazı</Table.HeaderCell>
        <Table.HeaderCell>Oluşturulma Tarihi</Table.HeaderCell>
        <Table.HeaderCell>Aktif Mi?</Table.HeaderCell>
       
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {
            backgrounds.map(backgrounds=>(
                <Table.Row>
                
                <Table.Cell>{backgrounds.imageUrl}</Table.Cell>
                <Table.Cell>{backgrounds.github}</Table.Cell> 
                <Table.Cell>{backgrounds.linkedin}</Table.Cell> 
                <Table.Cell>{backgrounds.coverLetter}</Table.Cell> 
                <Table.Cell>{backgrounds.isActivated}</Table.Cell> 
                <Table.Cell>{backgrounds.createdAt}</Table.Cell> 
             
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
