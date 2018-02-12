import { hashHistory } from 'react-router';
import Routes from './routes';

const gotoDashBoard = () => hashHistory.push(Routes.dashboard);
const gotoLogin = () => hashHistory.push(Routes.login);

export default {gotoDashBoard, gotoLogin};
