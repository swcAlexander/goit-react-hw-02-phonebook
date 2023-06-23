import React from "react";
import {Container} from "components/Container/Container"




export class App extends React.Component {
    static propTypes = {
        // тут описуємо пропи
    }
    // state = {
    //     value: this.props.initialValue,
    // }
    state = {
      contacts: [],
      name: ''
    }


    render() {
        
      return (
        <Container>
          <input
              type="text"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          
          </Container>
            
        )
    }

}
