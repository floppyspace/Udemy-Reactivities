import React, { Fragment } from 'react';
import { Card, Image, Icon, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
}

const ActivitiyDetails: React.FC<IProps> = ({ activity, setEditMode }) => {
  return (
    <Fragment>
      {activity && (
        <Card fluid>
          <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
              <span>{activity.date}</span>
            </Card.Meta>
            <Card.Description>{activity.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button.Group widths={2}>
              <Button onClick={() => setEditMode(true)} basic color="blue" content="Edit" />
              <Button basic color="grey" content="Cancel" />
            </Button.Group>
          </Card.Content>
        </Card>
      )}
    </Fragment>
  );
};

export default ActivitiyDetails;
