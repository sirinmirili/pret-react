const Text = ({ textStyle, text }) => {
  return (
    <div className={textStyle} dangerouslySetInnerHTML={{ __html: text }}></div>
  );
};

export default Text;
