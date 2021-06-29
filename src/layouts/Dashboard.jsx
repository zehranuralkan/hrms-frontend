import React from 'react'
import Navi from './Navi'
import Categories from './Categories'
import JobSeekerList from '../pages/JobSeekerList'
import BackgroundList from '../pages/BackgroundList'
import EmployeeList from '../pages/EmployeeList'
import EmployerList from '../pages/EmployerList'
import JobExperienceList from '../pages/JobExperienceList'
import JobTitleList from '../pages/JobTitleList'
import UserList from '../pages/UserList'
import { Grid } from 'semantic-ui-react'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories></Categories>
                    </Grid.Column>

                    <Grid.Column width={12}>
                        <p>İş Arayanlar Listesi</p>
                        <JobSeekerList></JobSeekerList>
                    </Grid.Column>


                </Grid.Row>

            

                <Grid.Row>
                    <Grid.Column width={4}>

                    </Grid.Column>

                    <Grid.Column width={12}>
                    <p>Özgeçmiş Listesi</p>
                        <BackgroundList></BackgroundList>
                    </Grid.Column>


                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={4}>
                         </Grid.Column>
                        
                    <Grid.Column width={12}>
                    <p>Çalışan Listesi</p>
                        <EmployeeList></EmployeeList>
                    </Grid.Column>


                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={4}>
                       </Grid.Column>

                    <Grid.Column width={12}>
                    <p>İş Veren Listesi</p>
                        <EmployerList></EmployerList>
                    </Grid.Column>


                </Grid.Row>


                <Grid.Row>
                    <Grid.Column width={4}>
                          </Grid.Column>

                    <Grid.Column width={12}>
                    <p>İş Deneyimi Listesi</p>
                        <JobExperienceList></JobExperienceList>
                    </Grid.Column>


                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={4}>
                        </Grid.Column>

                    <Grid.Column width={12}>
                    <p>Kullanıcı Listesi</p>
                        <UserList></UserList>
                    </Grid.Column>


                </Grid.Row>
            </Grid>




        </div>
    )
}
