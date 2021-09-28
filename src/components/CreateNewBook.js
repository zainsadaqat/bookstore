function CreateNewBook() {
  return (
    <>
      <h2>Add Book Info</h2>
      <form>
        <input type="text" placeholder="Add a Book" />
        <input type="text" placeholder="Add a Author" />
        <input type="submit" />
      </form>
    </>
  );
}

export default CreateNewBook;
