import React, { useState } from 'react';

const Calculator = () => {
  const [hw, setHw] = useState('');
  const [recitation, setRecitation] = useState('');
  const [quiz1, setQuiz1] = useState('');
  const [quiz2, setQuiz2] = useState('');
  const [quiz3, setQuiz3] = useState('');
  const [quiz4, setQuiz4] = useState('');
  const [quiz5, setQuiz5] = useState('');
  const [quiz6, setQuiz6] = useState('');
  const [midterm1, setMidterm1] = useState('');
  const [midterm2, setMidterm2] = useState('');
  const [finalExam, setFinalExam] = useState('');
  const [currentGrade, setCurrentGrade] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Perform grade calculation here
    const totalPercentage = 100;
    const quizzesGraded =
      ((parseFloat(quiz1) +
        parseFloat(quiz2) +
        parseFloat(quiz3) +
        parseFloat(quiz4) +
        parseFloat(quiz6)) /
        20) *
      12.5;
    const quiz5Graded = (parseFloat(quiz5) / 8) * 6.5;
    const midterm1Graded = parseFloat(midterm1) * 1.9;
    const midterm2Graded = parseFloat(midterm2) * 1.9;
    const finalGraded = (parseFloat(finalExam) / 22) * 24;
    const hwGraded = parseFloat(hw) * 0.1;
    const recitationGraded = parseFloat(recitation) * 0.12;

    const total =
      (quizzesGraded +
        quiz5Graded +
        midterm1Graded +
        midterm2Graded +
        hwGraded +
        recitationGraded +
        finalGraded +
        1) /
      totalPercentage;
    const calculatedGrade = total * 100;

    setCurrentGrade(calculatedGrade.toFixed(2));
  };

  return (
    <div
      id="Calculator"
      className="min-h-screen text-center pt-40 mx-auto max-w-screen-lg bg-blend-color"
    >
      <div className="mx-auto text-xl text-left max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-full xl:max-w-full">
        <div className="text-left text-3xl font-semibold mb-8">Calculator</div>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-full xl:max-w-full grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="hw" className="mb-1 text-2xl font-bold">HW Average:</label>
            <input
              type="number"
              step="0.01"
              id="hw"
              value={hw}
              onChange={(e) => setHw(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="recitation" className="mb-1 text-2xl font-bold">Recitation Average:</label>
            <input
              type="number"
              step="0.01"
              id="recitation"
              value={recitation}
              onChange={(e) => setRecitation(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="quiz1" className="mb-1 text-2xl font-bold">Quiz 1 Grade (out of 4):</label>
            <input
              type="number"
              step="0.01"
              id="quiz1"
              value={quiz1}
              onChange={(e) => setQuiz1(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="quiz2" className="mb-1 text-2xl font-bold">Quiz 2 Grade (out of 4):</label>
            <input
              type="number"
              step="0.01"
              id="quiz2"
              value={quiz2}
              onChange={(e) => setQuiz2(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="quiz3" className="mb-1 text-2xl font-bold">Quiz 3 Grade (out of 4):</label>
            <input
              type="number"
              step="0.01"
              id="quiz3"
              value={quiz3}
              onChange={(e) => setQuiz3(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="quiz4" className="mb-1 text-2xl font-bold">Quiz 4 Grade (out of 4):</label>
            <input
              type="number"
              step="0.01"
              id="quiz4"
              value={quiz4}
              onChange={(e) => setQuiz4(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="quiz1" className="mb-1 text-2xl font-bold">Quiz 5 Grade (out of 8):</label>
            <input
              type="number"
              step="0.01"
              id="quiz5"
              value={quiz5}
              onChange={(e) => setQuiz5(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="quiz1" className="mb-1 text-2xl font-bold">Quiz 6 Grade (out of 4):</label>
            <input
              type="number"
              step="0.01"
              id="quiz6"
              value={quiz6}
              onChange={(e) => setQuiz6(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="quiz1" className="mb-1 text-2xl font-bold">Midterm 1 Grade (out of 10):</label>
            <input
              type="number"
              step="0.01"
              id="midterm1"
              value={midterm1}
              onChange={(e) => setMidterm1(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="quiz1" className="mb-1 text-2xl font-bold">Midterm 2 Grade (out of 10):</label>
            <input
              type="number"
              step="0.01"
              id="midterm2"
              value={midterm2}
              onChange={(e) => setMidterm2(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <div className="bg-backgroundcolor p-5 transition-transform hover:-translate-y-2 rounded-xl flex flex-col h-full">
          <div className="flex flex-col h-full">
            <label htmlFor="quiz1" className="mb-1 text-2xl font-bold">Final Exam Grade (out of 22):</label>
            <input
              type="number"
              step="0.01"
              id="final"
              value={finalExam}
              onChange={(e) => setFinalExam(e.target.value)}
              required
              className="mb-4 text-xl text-left"
            />
          </div>
        </div>
        <button type="submit" className="bg-gray-400 text-white font-bold py-2 px-4 rounded">Calculate</button>
      </form>
      {currentGrade && <p>Current Grade: {currentGrade}%</p>}
    </div>
  );
};

export default Calculator;
