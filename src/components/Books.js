import React from 'react';

function Books() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Add a book" />
        <input type="submit" />
      </form>
      <button type="button">Remove</button>
    </section>
  );
}

export default Books;
