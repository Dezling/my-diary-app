import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/Journalitem/Journalitem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
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

	const [inputdata, setInputData] = useState('');
	const inputChange = (event) => {
		setInputData(event.target.value);

	};


	return(
		<div className='app'>
		 <LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					<CardButton>
						<JournalItem
							title = {data[0].title}
							text = {data[0].text}
							date = {data[0].date}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title = {data[1].title}
							text = {data[1].text}
							date = {data[1].date}
						/>
					</CardButton>
				</JournalList>

			</LeftPanel>
			<Body>
				<input type='text' value={inputdata} onChange={inputChange}>
				
				</input>
			</Body>
			
		

		</div>
   
	);
 
}

export default App;
