import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/Journalitem/Journalitem';
function App() {
	const data = [
		{
			title: 'Титульный лист',
			text: 'Что то на русском',
			date: new Date()
		},
		{
			title: 'Поход в горы',
			text: 'Что то на русском языке хочется',
			date: new Date()
		}
	];

	return(
		<> 
			<h1>Заголовок</h1>
			<p> Проект</p>
			<Button/>
			<CardButton>
        Новое воспоминание  
			</CardButton>
			<CardButton>
				<JournalItem
					title = {data[0].title}
					text = {data[0].text}
					date = {data[0].date}
				/>
			</CardButton>
			<JournalItem
				title = {data[1].title}
				text = {data[1].text}
				date = {data[1].date}
			/>
		</>
   
	);
 
}

export default App;
