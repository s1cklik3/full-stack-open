const Notification = ({ message }: { message: string | null }) =>
  message ? <div className="success">{message}</div> : null;

export default Notification;
