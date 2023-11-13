type RequestProp = {
  status: 'loading'|'success'|'error';
};
const Request = ({ status }: RequestProp) => {
  let message = "";
  if (status === "loading") {
    message='yukleniyor'
  }if(status='success'){
    message='Basarili'
  }if(status='error'){
    message='hata'
  }
  return <div>{message} </div>;
};

export default Request;
