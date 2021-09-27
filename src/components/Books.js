import React from 'react';
import Book from './Book';
import CreateNewBook from './CreateNewBook';

function Books() {
  return (
    <section>
      <Book title="Zain's New Book" author="Zain Sadaqat" />
      <Book title="Zain's Old Book" author="Zain Sadaqat" />
      <hr />
      <CreateNewBook />
    </section>
  );
}

export default Books;
