import React from "react";
import { Segment, Image, Item, Button, Header } from "semantic-ui-react";

const activityImageStyle = {
  filter: 'brightness(30%)'
};

const activityImageTextStyle = {
  position: 'absolute',
  bottom: '5%',
  left: '5%',
  width: '100%',
  height: 'auto',
  color: 'white'
};

const ActivityDetailedHeader = () => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image src={`/assets/placeholder.png`} fluid style={activityImageStyle} />
        <Segment basic style={activityImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={"Title"}
                  style={{ color: "white" }}
                />
                <p>Date</p>
                <p>
                  Hosted by <strong>Bob</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached="bottom">
        <Button color="teal">Join Activity</Button>
        <Button>Cancel attendance</Button>
        <Button color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default ActivityDetailedHeader;
