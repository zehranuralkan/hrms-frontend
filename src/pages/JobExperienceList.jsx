import React, {useState,useEffect} from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobExperienceService from '../services/jobExperienceService';
export default function JobExperienceList() {
  const[jobExperiences,setJobExperience]=useState([]);
    useEffect(()=>{
      //komponent yüklendiğinde yapılması gerkeen komut
      let jobExperienceService=new JobExperienceService()
      jobExperienceService.getJobExperience().then(result=>setJobExperience(result.data.data)) })
  
    return (
        <div>
            <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>İş Yeri Adı</Table.HeaderCell>
        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
        <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
        <Table.HeaderCell>Ayrılma Tarihi</Table.HeaderCell>
        <Table.HeaderCell>OLuşturulma Tarihi</Table.HeaderCell>
        <Table.HeaderCell>Aktif Mi?</Table.HeaderCell>
      
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        jobExperiences.map(jobExperiences=>(
          <Table.Row>
                
          <Table.Cell>{jobExperiences.workPlaceName}</Table.Cell>
          <Table.Cell>{jobExperiences.position}</Table.Cell> 
          <Table.Cell>{jobExperiences.startingDate}</Table.Cell> 
          <Table.Cell>{jobExperiences.finishingDate}</Table.Cell> 
          <Table.Cell>{jobExperiences.createdAt}</Table.Cell> 
          <Table.Cell>{jobExperiences.isActivated}</Table.Cell> 
         
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
