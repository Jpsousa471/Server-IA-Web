import Lib from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-BR';

Lib.locale('pt-BR');
Lib.extend(relativeTime);

export const dayjs = Lib;
