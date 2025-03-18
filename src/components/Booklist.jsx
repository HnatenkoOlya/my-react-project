export const favBooks = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Router overview" }
  ];
  
  export default function Booklist ({books}) {
    return (
        <ul>
            {books.map((book) => {
                return <li key={book.id}>{book.name}</li>;
            })}
        </ul>
    );
  };