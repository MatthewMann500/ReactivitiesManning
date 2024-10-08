import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useStore } from "../../../../app/stores/store";
import LoadingComponent from "../../../../app/layout/loadingComponents";
import { observer } from "mobx-react-lite";

export default observer (function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity: activity, openForm, cancelSelectedActivity: cancelSelectActivity} = activityStore;

    if(!activity) return <LoadingComponent/>;

    return(
        <Card fluid> 
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content> 
            <Card.Content extra>
                <Button.Group width = '2'>
                    <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'/>
                    <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})