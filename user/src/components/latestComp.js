import { Text, Card, Image } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

function LatestNews(props) {
  return (
    <div>
      <Card
        style={{ width: "400px", height: "300px" }}
        shadow="sm"
        padding="xl"
        component={Link}
        to={"/" + props.id}
      >
        <Card.Section>
          <Image src={props.src} height={200} withPlaceholder />
        </Card.Section>

        <Text style={{ marginTop: "20px" }} weight={500} size="lg">
          {props.title}
        </Text>

        <Text size="sm">{props.description}</Text>
      </Card>
    </div>
  );
}

export default LatestNews;
