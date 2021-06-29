import React, {useState,useEffect} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService';
export default function EmployerList() {

    const[employers,setEmployer]=useState([]);
    useEffect(()=>{
      //komponent yüklendiğinde yapılması gerkeen komut
      let employerService=new EmployerService()
      employerService.getEmployer().then(result=>setEmployer(result.data.data)) })
  
    return (
        <div>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
        <Table.HeaderCell>web Sitesi</Table.HeaderCell>
        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Şifre</Table.HeaderCell>

      </Table.Row>
    </Table.Header>

    <Table.Body>
    {
            employers.map(employers=>(
                <Table.Row>
                
                <Table.Cell>{employers.companyName}</Table.Cell>
                <Table.Cell>{employers.webSite}</Table.Cell> 
                <Table.Cell>{employers.phoneNumber}</Table.Cell> 
                <Table.Cell>{employers.email}</Table.Cell> 
                <Table.Cell>{employers.password}</Table.Cell> 
               
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
