import React, { useState, useEffect } from "react";
import MacroComponent from "./MacroComponent";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ChartComponent from "./ChartComponent";
import { Database } from 'firebase-firestore-lite';

const db = new Database({ projectId: process.env.REACT_APP_FIREBASE_PROJECTID });

function NewMacros(props) {
    const [name, setName] = useState();
    const datesHardcoded = [
        {
            name: 'Day 1',
            protein: 20,
            carbohydrates: 24,
            fat: 24,
            id: Math.random()
        },
        {
            name: 'Day 2',
            protein: 30,
            carbohydrates: 13,
            fat: 22,
            id: Math.random()
        },
        {
            name: 'Day 3',
            protein: 20,
            carbohydrates: 98,
            fat: 22,
            id: Math.random()
        },
        {
            name: 'Day 4',
            protein: 27,
            carbohydrates: 39,
            fat: 20,
            id: Math.random()
        },
        {
            name: 'Day 5',
            protein: 18,
            carbohydrates: 48,
            fat: 21,
            id: Math.random()
        },
        {
            name: 'Day 6',
            protein: 23,
            carbohydrates: 38,
            fat: 25,
            id: Math.random()
        },
        {
            name: 'Day 7',
            protein: 34,
            carbohydrates: 43,
            fat: 21,
            id: Math.random()
        },
    ]
    const [dates, setDates] = useState(
        datesHardcoded
    );
    useEffect(() => {
        async function fetchMyAPI() {
          const ref = db.ref('Macros');
          const doc = await ref.list(); // Returns an instance of List
          const data = doc.documents
          setDates(data)
        }
    
        fetchMyAPI()
    
      }, []);

    const [protein, setProtein] = useState();
    const [carbohydrates, setCarbohydrates] = useState();
    const [fat, setFat] = useState();
    const handleSubmit = () => {
        setDates(prevDates => {
            const newDates = {
                name: name,
                protein: protein,
                carbohydrates: carbohydrates,
                fat: fat,
                id: Math.random()
            }
            return [...prevDates, newDates]
        })
    }
    console.log(dates);
    return (
        <div>
            <h4>New Macros</h4>
            {dates.map((dane) => {
                return <MacroComponent protein={dane.protein} carbohydrates={dane.carbohydrates} fat={dane.fat} key={dane.id} id={dane.id} />
            })}

            <Form>
                <FormGroup>
                    <Input onChange={e => setName(e.target.value)} type="text" name="text" id="exampletext" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNumber">Protein</Label>
                    <Input onChange={e => setProtein(e.target.valueAsNumber)} type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNumber">Carbohydrates</Label>
                    <Input onChange={e => setCarbohydrates(e.target.valueAsNumber)} type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleNumber">Fat</Label>
                    <Input onChange={e => setFat(e.target.valueAsNumber)} type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
                </FormGroup>
                <Button onClick={() => handleSubmit()}>Submit</Button>
            </Form>
            <ChartComponent newMacros={dates}></ChartComponent>
        </div>
    )
}

export default NewMacros;