import React from 'react'
import { Container } from 'semantic-ui-react'
import { Menu, Segment, Button} from 'semantic-ui-react'
import CartSummary from './CartSummary'
export default function Navi() {
    return (
        <div>
            <Segment inverted>
            <Menu inverted fixed="top">
                <Container>
        <Menu.Item
          name='home'
         />
        <Menu.Item
          name='messages'
         />

        <Menu.Menu position='right'>
        <CartSummary></CartSummary>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
        </Container>
      </Menu>
      </Segment>
        </div>
    )
}
