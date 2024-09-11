import { useState } from "react";
import React from "react";
import { Box } from "@mui/material";
import HeroBanner from "./HeroBanner";
import SearchExercises from "./SearchExercises";
import Exercises from "./Exercises";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};
export default Home;
