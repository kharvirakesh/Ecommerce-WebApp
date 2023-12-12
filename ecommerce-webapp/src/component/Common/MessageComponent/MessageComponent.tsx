import { message } from 'antd';

const ShowMessage = (type: any, content: string) => {
  const [messageApi, contextHolder] = message.useMessage();

  messageApi.open({
    type: type,
    content: content,
  });

  return contextHolder;
};

export default ShowMessage;
