import React, {useState,useEffect} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobSeekerService from '../services/jobSeekerService';
export default function JobSeekerList() {

  const[jobSeekers,setJobSeeker]=useState([]);
    useEffect(()=>{
      //komponent yüklendiğinde yapılması gerkeen komut
      let jobSeekerService=new JobSeekerService()
      jobSeekerService.getJobSeeker().then(result=>setJobSeeker(result.data.data)) })
  

    return (
        <div>
         <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ad</Table.HeaderCell>
        <Table.HeaderCell>Soyad</Table.HeaderCell>
        <Table.HeaderCell>TC No</Table.HeaderCell>
        <Table.HeaderCell>Doğum Tarihi</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Şifre</Table.HeaderCell>
        
       </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        jobSeekers.map(jobSeekers=>
          <Table.Row>
                
          <Table.Cell>{jobSeekers.firstName}</Table.Cell>
          <Table.Cell>{jobSeekers.lastName}</Table.Cell> 
          <Table.Cell>{jobSeekers.identityNumber}</Table.Cell> 
          <Table.Cell>{jobSeekers.birthYear}</Table.Cell> 
          <Table.Cell>{jobSeekers.email}</Table.Cell> 
          <Table.Cell>{jobSeekers.password}</Table.Cell> 
         
        </Table.Row>
          
          
          )
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
