
const Title = ({ name, size, color="black" }) => {
  return (
    <h3 className={`fw-semibold fs-${size ?? 5}`} style={{color:color}}>{name}</h3>
  );
};

export default Title;
