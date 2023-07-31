import React, { useState } from "react";
import FormEditor from "./components/FormEditor";
import FormPreview from "./components/FormPreview";

function App() {
  const [formQuestions, setFormQuestions] = useState([]); // Initialize formQuestions as an empty array

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Custom Form Builder</h1>
      <div className="grid grid-cols-2 gap-8">
        <FormEditor formQuestions={formQuestions} setFormQuestions={setFormQuestions} />
        <div>
          <FormPreview formQuestions={formQuestions} />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={() => console.log(formQuestions)}
          >
            
           Submit Form
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
