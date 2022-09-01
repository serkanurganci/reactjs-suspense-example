const Num = ({ resource }) => {
  const num = resource.number.read();
  return <div>{num}</div>;
};

export default Num;
