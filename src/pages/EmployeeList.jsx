import React, {useState,useEffect} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import EmployeeService from '../services/employeeService';
export default function EmployeeList() {
  const[employees,setEmployee]=useState([]);
  useEffect(()=>{
    //komponent yüklendiğinde yapılması gerkeen komut
    let employeeService=new EmployeeService()
    employeeService.getEmployee().then(result=>setEmployee(result.data.data)) })

    return (
        <div>
           <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ad</Table.HeaderCell>
        <Table.HeaderCell>Soyad</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Şifre</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {
            employees.map(employees=>(
                <Table.Row>
                
                <Table.Cell>{employees.firstName}</Table.Cell>
                <Table.Cell>{employees.lastName}</Table.Cell> 
                <Table.Cell>{employees.email}</Table.Cell> 
                <Table.Cell>{employees.password}</Table.Cell> 
               
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
