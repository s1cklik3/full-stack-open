const Error = ({ message }: { message: string | null }) =>
  message ? <div className="error">{message}</div> : null;

export default Error;
