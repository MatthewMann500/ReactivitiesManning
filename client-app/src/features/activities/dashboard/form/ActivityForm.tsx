import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../../app/models/activity";

interface Props{
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}


export default function ActivityForm({activity : selectedActivity, closeForm, createOrEdit} :  Props){

    const initialState  = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initialState)

    function handleSubmit(){
        createOrEdit(activity);
    }

    function handleChangeInput(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name , value} = event.target;
        setActivity({...activity, [name] : value})

    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Input placeholder='Title' value = {activity.title} name='title' onChange={handleChangeInput}/>
                <Form.TextArea placeholder='Description' value = {activity.description} name='description' onChange={handleChangeInput}/>
                <Form.Input placeholder='Category' value = {activity.category} name='category' onChange={handleChangeInput}/>
                <Form.Input placeholder='Date' value = {activity.date} name='date' onChange={handleChangeInput}/>
                <Form.Input placeholder='City' value = {activity.city} name='city' onChange={handleChangeInput}/>
                <Form.Input placeholder='Venue' value = {activity.venue} name='venue' onChange={handleChangeInput}/>
                <Button floated="right" positive type="submit" content="Submit"/>
                <Button onClick={closeForm}floated="right" type="button" content="Cancel"/>
            </Form>
        </Segment>
    )
}