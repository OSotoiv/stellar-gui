import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StellarApi from "./StellarAPI"
import Question from "./Question"

const Testing = () => {
    const navigate = useNavigate();
    //what if exam_id is not a number
    const { examId = null } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQ, setCurrQ] = useState(0)
    const [guesses, setGuess] = useState([])
    const title = useRef("")
    const [timer, setTimer] = useState(0); // Timer in seconds
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (isTimerRunning) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isTimerRunning]);


    const startTimer = () => {
        setIsTimerRunning(true);
    };

    const stopTimer = () => {
        setIsTimerRunning(false);
    };

    function updateGuesses(guess) {
        setGuess(prevGuesses => {
            const updatedGuesses = [...prevGuesses];
            updatedGuesses[currentQ].guess = guess;
            return updatedGuesses;
        })
    }

    function nextQ() {
        if (currentQ < questions.length) {
            setCurrQ(c => c + 1);
        }
    }
    function backQ() {
        if (currentQ > 0) {
            setCurrQ(c => c - 1);
        }
    }
    function isFirstQ() {
        return currentQ === 0;
    }
    function isLastQ() {
        return currentQ === (questions.length - 1)
    }

    function submitExam() {
        stopTimer()
        //send all answers to be checked
        const correctCount = guesses.reduce((count, entry) => {
            return count + (entry.guess === entry.answer ? 1 : 0);
        }, 0)
        const finalGrade = Math.round((correctCount / questions.length) * 100);
        //route to post final grade.
        navigate(
            `/show-score`,
            { state: { exam_score: finalGrade, exam_time: timer, exam_id: parseInt(examId), } }
        );
    }

    useEffect(() => {
        async function getQuestions(id) {
            const exam = await StellarApi.getExam(id);
            setQuestions([...exam.questions]);
            setGuess(exam.questions.map(q => { return { guess: null, answer: q.correct_answer } }))
            title.current = exam.title;
            startTimer()
        }
        examId && getQuestions(examId)
    }, [examId]);

    // useEffect(() => {
    //     if (questions.length) {
    //         setGuess(questions.map(q => { return { guess: null, answer: q.correct_answer } }))
    //         startTimer()
    //     }
    // }, [questions])

    return (
        <>
            <h1>{title.current}</h1>
            <h3>Time:{timer}</h3>
            {questions.length && <Question
                data={questions[currentQ]}
                isLastQ={isLastQ}
                isFirstQ={isFirstQ}
                guesses={guesses[currentQ]}
                updateGuesses={updateGuesses}
                currentQ={currentQ}
                nextQ={nextQ}
                backQ={backQ}
                submitExam={submitExam}
            />}
        </>
    )
}

export default Testing;