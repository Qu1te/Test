import React ,{useState,useEffect} from "react";
import exclamationMark from "../font/exclamation-mark.svg"
import strelka from "../font/aa.png"
const Content = () => {
	const questions = [
		{
		  question: 'Что такое React?',
		  options: ['Библиотека для создания пользовательских интерфейсов', 'Язык программирования', 'Фреймворк для работы с базами данных'],
		  correctAnswer: 'Библиотека для создания пользовательских интерфейсов',
		},
		{
		  question: 'Что такое JSX?',
		  options: ['JavaScript XML', 'Java XML', 'JavaScript Extension', 'Java Extension'],
		  correctAnswer: 'JavaScript XML',
		},
		{
		  question: 'Какой хук используется для добавления состояния в функциональном компоненте?',
		  options: ['useState', 'useEffect', 'useStateEffect', 'useEffectState'],
		  correctAnswer: 'useState',
		},
		{
			question: 'Где правильно передена функция в качестве свойства?',
			options: ['argument=(this.someFunction)', 'argument={this.someFunction}', 'argument={this.someFunction {}}', 'argument={someFunction}',"argument={this.someFunction ()}"],
			correctAnswer: 'argument={this.someFunction}',
		 },
		 {
			question: 'Сколько родительских HTML тегов может быть выведено в React JS компоненте?',
			options: ['Не более 10', 'Не более 5', 'Неограниченное количество', 'Не более 3',"Всегда 1"],
			correctAnswer: 'Всегда 1',
		 },
		 {
			question: 'Как обратится к свойству weight?',
			options: ['{props.weight}', '{this.props.weight}', '{this.prop.weight}','{prop.weight}'],
			correctAnswer: '{this.props.weight}',
		 },
		 {
			question: 'Какая компания разработала React JS?',
			options: ['Twitter', 'Google', 'Amazon','Facebook'],
			correctAnswer: 'Facebook',
		 },
		 {
			question: 'Куда можно встроить готовый код из метода render()?',
			options: ['Только в div', 'Только в тег, у которого есть id', 'В div или же в span','В любой тег'],
			correctAnswer: 'В любой тег',
		 },

		 {
			question: 'Где правильно выведен компонент через рендер?',
			options: ['<Test>', '</Test>', '<Test />'],
			correctAnswer: '<Test />',
		 },
		 {
			question: 'От какого класса идет наследование всех компонентов?',
			options: ['Component', 'React.Component','ReactJS.Component','ReactComponent'],
			correctAnswer: 'React.Component',
		 },
	 ];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const [timer, setTimer] = useState(0);


	useEffect(() => {
		const timerId = setInterval(() => setTimer((prevTimer) => prevTimer + 1), 1000);
  
		return () => clearInterval(timerId);
	 }, [currentQuestion]);
 
	const handleAnswerClick = (selectedOption) => {
	  if (selectedOption === questions[currentQuestion].correctAnswer) {
		 setScore(score + 1);
	  }
 
	  if (currentQuestion === questions.length - 1) {
		 setShowResult(true);
	  } else {
		 setCurrentQuestion(currentQuestion + 1);
	  }
	}

	const remainingQuestions = questions.length - currentQuestion;

	return (
		<main>
			<div className="container">
				{showResult ? (
					<div className="result">
						<div className="testResultText">
							<h2>Результаты теста:</h2>
						</div>
						<div className="testResult">
							<p>Вы набрали {score} балла из {questions.length} правильных ответов.</p>
						</div>
						<div className="back">
							<button>
								<a href="/">BACK</a>
								<span><img src={strelka}/></span>
							</button>
						</div>
					</div>
				):(
					<div className="content">
					<div className="timerAndRemains">
					 	<div className="QuestionNo">
							<div className="img">
								<img src={exclamationMark} />
							</div>
							<b>Question No.{remainingQuestions} of 10 </b>
						</div>
						<div className="timer">
							<p><b>{Math.floor(timer / 60)} минут</b><b>{timer % 60} секунд </b></p>
						</div>
					</div>
					<div className="Quest">
						<h2>{questions[currentQuestion].question}</h2>
					</div>
					<div className="choosingAnAnswer">
						<p>Please choose one of the following answers:</p>
					</div>
					<div className="answers">
						{questions[currentQuestion].options.map((option, index) => (
              		<ol>
							<li key={index} onClick={() => handleAnswerClick(option)}>
								{option}
							</li>
						</ol>
            	))}

					</div>
				</div>
				)}
			</div>
		</main>
	)
}

export default Content;