import EnumHttpStatus from '../enums/httpCode';

export default function asyncMiddleware(handler) {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (error) {
      console.error('Error:', error);
      return res
        .status(EnumHttpStatus.INTERNAL_SERVER_ERROR)
        .JSON({ ERROR: 'something went wrong' });
    }
  };
}
