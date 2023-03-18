import React from "react";
import './Form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nume: '',
            prenume: '',
            meserie: '',
            salariu: 0,
            data_angajarii: (new Date()).toDateString()
        };
    }

    componentDidUpdate() {
        console.log(this.state)
    }

    submitAddForm(event) {
        event.preventDefault();
        this.updateData();
        this.props.addUser(this.state);
    }

    updateNume(event) {
        this.setState({nume: event.target.value});
        //console.log(this.state)
    }

    updatePrenume(event) {
        this.setState({prenume: event.target.value})
        //console.log(this.state)
    }

    updateMeserie(event) {
        this.setState({meserie: event.target.value})
        //console.log(this.state)
    }

    updateSalariu(event) {
        this.setState({salariu: event.target.value})
        //console.log(this.state)
    }

    updateData() {
        this.setState({data_angajarii: (new Date()).toDateString()})
    }

    render() {
        return(
            <form className="user-add-form" onSubmit={(event) => this.submitAddForm(event)}>
                <h2>Completati:</h2>
                <label htmlFor="nume">Nume:</label>
                <input type="text" name="nume" onChange={(event) => this.updateNume(event)}/>
                <label htmlFor="prenume">Prenume:</label>
                <input type="text" name="prenume" onChange={(event) => this.updatePrenume(event)}/>
                <label htmlFor="meserie">Meserie:</label>
                <input type="text" name="meserie" onChange={(event) => this.updateMeserie(event)}/>
                <label htmlFor="salariu">Salariu:</label>
                <input type="number" defaultValue='0' min='0' max='99999999999999' name="salariu" onChange={(event) => this.updateSalariu(event)}/>
                <input type="submit" value="Trimiteti formularul"/>
            </form>
        )
    }
}

export default Form;