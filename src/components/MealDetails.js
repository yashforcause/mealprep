import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Typography, Container, Box, Card, CardContent } from '@mui/material';

const MealDetails = () => {
  const { id } = useParams();

  // Sample meal data based on the ID (in a real-world app, you'd fetch this from an API)
  const mealData = {
    1: { name: 'Grilled Chicken Salad', description: 'A healthy grilled chicken salad with fresh vegetables.', price: '$12.99', ingredients: ['Chicken', 'Lettuce', 'Tomato', 'Cucumber'] },
    2: { name: 'Vegan Buddha Bowl', description: 'A plant-based meal packed with quinoa, avocado, and veggies.', price: '$10.99', ingredients: ['Quinoa', 'Avocado', 'Kale', 'Chickpeas'] },
    3: { name: 'Beef Stir Fry', description: 'Tender beef with stir-fried vegetables and a savory sauce.', price: '$14.99', ingredients: ['Beef', 'Bell Peppers', 'Onions', 'Soy Sauce'] },
  };

  const meal = mealData[id];

  if (!meal) {
    return <Typography variant="h6">Meal not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ padding: '40px 20px' }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 3 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            {meal.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            {meal.description}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            <strong>Price:</strong> {meal.price}
          </Typography>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Ingredients:</Typography>
            <ul>
              {meal.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </Box>
        </CardContent>
      </Card>

      {/* Home Button */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            marginTop: 4,
            backgroundColor: '#1976d2',
            '&:hover': { backgroundColor: '#1565c0' },
          }}
        >
          Back to Home
        </Button>
      </Link>
    </Container>
  );
};

export default MealDetails;
