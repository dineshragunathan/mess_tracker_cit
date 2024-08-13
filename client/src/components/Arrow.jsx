const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div 
        className={className}
        style={{ ...style, display: 'block', color: 'transparent'}}
        onClick={onClick} 
      >
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', color: 'white' }}
        onClick={onClick}
      />
    );
  };
  
  export { NextArrow, PrevArrow };