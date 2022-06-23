import { object, string } from 'yup';

const uploadReqSchema = object({
    base64: string()
        .required('The base64 parameter is a required parameter')
        .typeError('base64 parameter need to be of type string'),
    title: string()
        .required('The title parameter is a required parameter')
        .typeError('The title parameter need to be of type string'),
    description: string()
        .required('The description parameter is a required parameter')
        .typeError('The description parameter need to be of type string'),
});

export default uploadReqSchema;
