import React, { useState } from "react";
import { formQuestionTypes } from "../utils/formQuestionTypes";
import FormPreview from "./FormPreview";

const FormEditor = () => {
  const [formName, setFormName] = useState(""); // State for the form name
  const [headerImage, setHeaderImage] = useState(null); // State for the header image file
  const [formQuestions, setFormQuestions] = useState([
    // Default question
    {
      type: "text",
      text: "",
      options: [],
    },
  ]);

  const addQuestion = () => {
    setFormQuestions((prevQuestions) => [
      ...prevQuestions,
      {
        type: "text", // Default question type
        text: "",
        options: [],
      },
    ]);
  };

  const removeQuestion = (index) => {
    setFormQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
  };

  const changeQuestionType = (index, type) => {
    setFormQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].type = type;
      return updatedQuestions;
    });
  };

  const changeQuestionText = (index, text) => {
    setFormQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].text = text;
      return updatedQuestions;
    });
  };

  const renderQuestionOptions = (question, index) => {
    if (question.type === "multipleChoice") {
      return (
        <div className="my-2">
          <label className="block font-medium mb-1">Options:</label>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex items-center">
              <input
                type="text"
                value={option}
                onChange={(e) => changeOptionText(index, optionIndex, e.target.value)}
                placeholder={`Option ${optionIndex + 1}`}
                className="w-full px-4 py-2 border rounded mr-2"
              />
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => removeOption(index, optionIndex)}
              >
                Remove
              </button>
            </div>
          ))}
          <button className="bg-green-500 text-white px-2 py-1 rounded mt-2" onClick={() => addOption(index)}>
            Add Option
          </button>
        </div>
      );
    }
    return null;
  };

  const addOption = (index) => {
    setFormQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].options.push("");
      return updatedQuestions;
    });
  };

  const changeOptionText = (index, optionIndex, text) => {
    setFormQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].options[optionIndex] = text;
      return updatedQuestions;
    });
  };

  const removeOption = (index, optionIndex) => {
    setFormQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].options.splice(optionIndex, 1);
      return updatedQuestions;
    });
  };

  return (
    <div>
      {/* Add form name */}
      <input
        type="text"
        value={formName}
        onChange={(e) => setFormName(e.target.value)}
        placeholder="Enter the form name"
        className="text-xl font-bold mb-4 px-4 py-2 border rounded w-full"
      />

      {/* Header Image File Input */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setHeaderImage(e.target.files[0])}
        className="mb-4"
      />

      {/* Render questions */}
      {formQuestions.map((question, index) => (
        <div key={index} className="mb-4">
          <select
            value={question.type}
            onChange={(e) => changeQuestionType(index, e.target.value)}
            className="block mb-2"
          >
            {formQuestionTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={question.text}
            onChange={(e) => changeQuestionText(index, e.target.value)}
            placeholder="Enter your question"
            className="block mb-2 w-full px-4 py-2 border rounded"
          />
          {renderQuestionOptions(question, index)}
          <button
            className="bg-red-500 text-white px-2 py-1 rounded"
            onClick={() => removeQuestion(index)}
          >
            Remove
          </button>
        </div>
      ))}

      {/* Add question button */}
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addQuestion}>
        Add Question
      </button>

      {/* Display Form Preview */}
      <FormPreview formName={formName} headerImage={headerImage} formQuestions={formQuestions} />
    </div>
  );
};

export default FormEditor;

