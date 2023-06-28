import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Section, Title, TitleMain } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'components/redux/selectors';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <Section title="Phonebook">
        <TitleMain>Phonebook</TitleMain>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Title>Contacts</Title>
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 && <ContactList />}
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
