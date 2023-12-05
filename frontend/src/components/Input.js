const Input = ({type, onchange,placeholder ,classname}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        className={classname}
        required
      />
    </>
  );
};
export default Input;
