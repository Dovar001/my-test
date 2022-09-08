import { Button, Grid, Stack } from "@mui/material";
import { FC, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { visitorTestQuestions } from "../../tests.fake.data";
import { ResultContent } from "../result-content";
import Circle from "react-circle";
import styles from "./result.module.css";

const Result: FC = () => {
  const [viewAnswers, setViewAnswers] = useState<boolean>(false);

  const startNew = () => {
    visitorTestQuestions.map((item: any) => {
      return (item.answerIds = []);
    });
  };

  const correctAnswer = () => {
    return visitorTestQuestions?.reduce(
      (prev: number, curr: any) =>
        curr?.answerIds[0] === curr.rightAnswerId ? (prev += 1) : prev,
      0
    );
  };

  const answerPercent = Math.round(
    (correctAnswer() * 100) / visitorTestQuestions?.length
  );

  console.log("correct", correctAnswer());
  console.log("length", visitorTestQuestions?.length);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Stack
          border={4}
          borderColor="green"
          padding={1}
          justifyContent="center"
          direction="row"
          alignItems="center"
        >
          You have answered correctly{" "}
          <span className={styles.number}>{correctAnswer()}</span> from
          <span className={styles.number}>{visitorTestQuestions?.length}</span>
          <Circle
            textStyle={{
              font: "bold 5rem Helvetica, Arial, sans-serif",
            }}
            progress={answerPercent}
            animate={true}
            animationDuration="2s"
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack alignItems="flex-end">
          <Button size="large" variant="contained" onClick={() => startNew()}>
            <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
              Start new test
            </Link>
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} direction="column">
          <Button
            variant="contained"
            onClick={() => setViewAnswers(!viewAnswers)}
          >
            {!viewAnswers ? "View answers ↓" : "Hide answers ↑ "}
          </Button>
          {viewAnswers &&
            visitorTestQuestions?.map((value: any, index: any) => {
              return <ResultContent currentQuestion={index + 1} />;
            })}
        </Stack>
      </Grid>
    </Grid>
  );
};
export { Result };
