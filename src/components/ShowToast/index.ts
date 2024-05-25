// eslint-disable-next-line import/no-extraneous-dependencies
import { type MessageType, showMessage } from 'react-native-flash-message';
// message is the headline Warning or Error or Success
// The s=description should be success or error message or the content of your warning
// the type is fixed,  warning | success | danger | info
const showToast = ({ message, type = 'default' }: { message: string; type?: MessageType }) => {
  const defaultMessage = 'An error occurred. Please try again.';
  const isMessageString = typeof message === 'string';

  showMessage({
    // backgroundColor: "brown",
    // color: "#fff",
    description: isMessageString ? message : defaultMessage,
    duration: 5000,
    message: '',
    type,
  });
};
export default showToast;
