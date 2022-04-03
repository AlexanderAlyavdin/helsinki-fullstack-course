const Notification = ({ notification }) => {
  return (
    <div className={`notification ${notification.isError ? "error" : ""}`}>
      {notification.message}
    </div>
  );
};

export default Notification;
