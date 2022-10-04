export default function Child({ children }) {
  console.log(children);
  return (
    <>
      <h3>Child</h3>
      {children}
    </>
  );
}
