const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="m-auto bg-black text-white p-3">
      <h3 className="">{errorMessage}</h3>
    </div>
  );
};

export default ErrorMessage;
