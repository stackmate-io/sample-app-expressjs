const Status = ({ message, success }) => {
  return (
    <div>
      <div>
        <p>
          {message}
        </p>
      </div>
      <div>
        <small>
          Success { success ? 'Yes' : 'No' }
        </small>
      </div>
    </div>
  );
}

export default Status;
