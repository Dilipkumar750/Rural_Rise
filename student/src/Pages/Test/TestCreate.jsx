import React, { useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import Form from "react-bootstrap/Form";
import { TextInput } from "../../components/TextInput";
import { useNavigate } from "react-router-dom";
import View from "../../components/View";


function TestCreate() {
    const navigate = useNavigate()
    const [questions, setQuestions] = useState([
        {subject:"", question: "", options: ["", "", "", ""] },
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleQuestionChange = (e) => {
        const { value } = e.target;
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex].question = value;
        setQuestions(updatedQuestions);
    };
    const handlesubjectChange = (e) => {
        const { value } = e.target;
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex].subject = value;
        setQuestions(updatedQuestions);
    };

    const handleOptionChange = (index, e) => {
        const { value } = e.target;
        const updatedQuestions = [...questions];
        updatedQuestions[currentQuestionIndex].options[index] = value;
        setQuestions(updatedQuestions);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // Optionally handle form submission here
            console.log("Form submitted:", questions);
            navigate('/AddTest')
        }
    };
    const handleAddQuestion = () => {
        setQuestions([...questions, {subject:'', question: "", options: ["", "", "", ""] }]);
        setCurrentQuestionIndex(questions.length);
    };
    return (
        <>
            <HeaderComponent page="Add Test" title="Adding Test Form" />
            <View style={{padding:'1rem'}}>
                <h1>Questionnaire</h1>
                <View>
                    <label>
                    subject:
                        <input
                            type="text"
                            value={questions[currentQuestionIndex]?.subject || ""}
                            onChange={handlesubjectChange}
                        />
                    </label>
                    <label>
                        Question:
                        <input
                            type="text"
                            value={questions[currentQuestionIndex]?.question || ""}
                            onChange={handleQuestionChange}
                        />
                    </label>
                    <View style={{display:'grid',gap:'1rem',marginTop:'1rem'}}>
                        {questions[currentQuestionIndex]?.options.map((option, index) => (
                            <label key={index}>
                                Option {index + 1}:
                                <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => handleOptionChange(index, e)}
                                    style={{border:"1px solid black"}}
                                />
                            </label>
                        ))}
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <button onClick={handleAddQuestion} style={{ backgroundColor: '#DBDC31' }}>Add Question</button>
                    </View>
                    <View style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <button onClick={handleNextQuestion} style={{ backgroundColor: '#DBDC31' }}>
                            {currentQuestionIndex < questions.length - 1
                            ? "Next Question"
                            : "Submit"}
                        </button>
                    </View>
                </View>
            </View>
            <View style={{padding:'1rem'}}>
                <h2>Preview</h2>
                <View>
                    {questions.map((q, qIndex) => (
                        <View key={qIndex} style={{ marginBottom: '2rem' }}>
                            <h3>{`Question ${qIndex + 1}: ${q.question}`}</h3>
                            <ul>
                                {q.options.map((option, oIndex) => (
                                    <li key={oIndex}>{option}</li>
                                ))}
                            </ul>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
}

export default TestCreate;
