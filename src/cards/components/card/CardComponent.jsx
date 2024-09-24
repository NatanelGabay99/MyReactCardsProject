import * as React from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardHeaderComponent from "./CardHeaderComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { useCurrentUser } from "../../../users/providers/UserProvider";

export default function CardComponent({
  card,
  handleDelete,
  handleEdit,
  handleLike,
}) {
  const navigate = useNavigate();
  const user = useCurrentUser();
  return (
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea
        onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
        <CardHeaderComponent
          image={card.image.url}
          alt={card.image.alt}
          title={card.title}
          subtitle={card.subtitle}
        />

        <CardBody
          phone={card.phone}
          address={card.address}
          bizNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
       likes={card.likes}
        id={card._id}
        user_id={card.user_id}
        phone={card.phone}
        handleDelete={handleDelete}
        handleLike={handleLike}
        handleEdit={handleEdit}
      />
    </Card>
  );
}