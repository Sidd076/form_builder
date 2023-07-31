import React from "react";

const FormPreview = ({ formName, headerImage, formQuestions }) => {
  return (
<div style={{ border: "5px solid #ccc", padding: "20px" }}>
      
      {headerImage && (
  <img
    src={URL.createObjectURL(headerImage)}
    alt="Header"
    className="mb-4"
    style={{ width: "1000px", height: "50px" }}
  />
)}
<h2 className="text-xl font-bold mb-4">{formName}</h2>

      {/* Render questions */}
      {formQuestions.map((question, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-medium mb-2">{question.text}</h3>
          {question.type === "text" && (
            <input type="text" className="w-full px-4 py-2 border rounded" />
          )}
          {question.type === "multipleChoice" && (
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`question_${index}_option_${optionIndex}`}
                    className="mr-2"
                  />
                  <label htmlFor={`question_${index}_option_${optionIndex}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
          {/* Add additional cases for other question types (Categorize, Cloze, Comprehension, etc.) */}
        </div>
      ))}
    </div>
  );
};

export default FormPreview;
