import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <ul>
      <li>Title: {title}</li>
      <li>Author: {author}</li>
    </ul>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
