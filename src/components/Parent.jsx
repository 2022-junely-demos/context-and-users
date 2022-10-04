import Child from './Child';

export default function Parent({ children }) {
  return (
    <>
      <h1>Parent</h1>
      {children}
    </>
  );
}
