const Controller = ({ onclickButton }) => {
  return (
    <div>
      <button
        onClick={() => {
          onclickButton(-1);
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          onclickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onclickButton(-100);
        }}
      >
        -100
      </button>
      <button
        onClick={() => {
          onclickButton(+100);
        }}
      >
        +100
      </button>
      <button
        onClick={() => {
          onclickButton(+10);
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          onclickButton(+1);
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Controller;
