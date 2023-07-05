import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
const ContactList = ({ filterContacts, onRemoveContact }) => {
  return (
    <List>
      {filterContacts.map(({ id, name, number }) => (
        <li className="contact-item" key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button className="button-remove" onClick={() => onRemoveContact(id)}>
            &times;
          </button>
        </li>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
