function Book(props) {
  return (
    <ul>
      <li>Title: {props.title}</li>
      <li>Author: {props.author}</li>
    </ul>
  );
}

export default Book;
