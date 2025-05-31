import arject from '@arcjet/next';
import {getEnv} from '@/lib/utils';

const aj = arject({ 
    key: getEnv('ARJECT_API_KEY'),
    rules: [], 
})

export default aj;