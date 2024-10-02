import './JournalAddButton.css';
import CardButton from '../CardButton/CardButton';
function JournalAddButton() {
  
	return(
		<CardButton className='journal-add '>
			<img src="plus.svg" alt="Плюсик" className='plus' />
			Новое воспоминание
		</CardButton>
	);
 
}

export default JournalAddButton;
