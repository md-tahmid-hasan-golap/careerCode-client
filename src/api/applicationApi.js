export const myApplicationPromised = () => {
  return fetch("http://localhost:3000/applications").then((res) =>
    res.json()
  );
};