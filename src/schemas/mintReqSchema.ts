import { object, string } from 'yup';

const mintReqSchema = object({
    metadata: string()
        .url()
        .required('The metadata parameter is a required parameter')
        .typeError('The metadata parameter need to be an valid URL'),
    receiver: string()
        .required('The receiver parameter is a required parameter')
        .typeError('The receiver parameter need to be of type string'),
});

export default mintReqSchema;
