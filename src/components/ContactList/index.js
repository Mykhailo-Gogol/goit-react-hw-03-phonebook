const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <>
      {filteredContacts().length ? (
        <ol className="contact-list">
          {filteredContacts().map(({ name, number, id }) => {
            return (
              <li key={name}>
                <p className="contact-text">
                  <span>{name}</span>
                  <span>{number}</span>
                </p>
                <button
                  className="delete-button"
                  onClick={() => onDeleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      ) : (
        <p>Contact list is empty</p>
      )}
    </>
  );
};

export default ContactList;
