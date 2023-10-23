export function TabButton(props) {
  function clickHandler() {}

  return (
    <li>
      <button onClick={clickHandler}>{props.children}</button>
    </li>
  );
}
