import { object, string, boolean, array } from 'yup';

const createKudoReqSchema = object({
    title: string()
        .required('The title parameter is a required parameter')
        .typeError('The title parameter need to be of type string'),
    description: string()
        .required('The description parameter is a required parameter')
        .typeError('The description parameter need to be of type string'),
    creator: string()
        .required('The creator parameter is a required parameter')
        .typeError('The creator parameter need to be of type string'),
    metadata: string()
        .required('The metadata parameter is a required parameter')
        .typeError('The metadata parameter need to be of type string'),
    isWhitelisted: boolean()
        .required('The isWhitelisted parameter is a required parameter')
        .typeError('The isWhitelisted parameter need to be of type boolean'),
    whitelistedPublicKeys: array().typeError(
        'The whitelistedPublicKeys parameter need to be of type array',
    ),
});

export default createKudoReqSchema;
