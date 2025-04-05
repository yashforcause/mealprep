// src/pages/Home.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "../store/actions/mealActions";
import { Grid, Card, CardContent, Typography, Button, Container, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
// import { fetchMeals } from "../store/mealsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { meals, loading, error } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  if (loading) return <CircularProgress sx={{ display: "block", margin: "20px auto" }} />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Our Meal Options
      </Typography>
      <Grid container spacing={4}>
        {meals.map((meal) => (
          <Grid item xs={12} sm={6} md={4} key={meal.id}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h5">{meal.name}</Typography>
                <Typography color="textSecondary">{meal.description}</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", marginTop: 1 }}>
                  Price: {meal.price}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/meal-details/${meal.id}`}
                  sx={{ marginTop: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
