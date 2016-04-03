import superAgent from 'superagent';
import Promise from 'bluebird';
import _ from 'lodash';
import config from 'config';

export const CALL_API = Symbol('CALL_API');

export default store => next => action => {
  if (!action[CALL_API]) {
    return next(action);
  }

  const request = action[CALL_API];
  const { getState } = store;
  const deferred = Promise.defer();
  const { method, path, successType, body } = request;
  const url = `${config.API_BASE_URL}${path}`;

  if (!!body) {
    superAgent[method](url)
      .send(body)
      .end((err, res) => {
        if (!err) {
          next({
            type: successType,
            response: res.body
          });

          if (_.isFunction(request.afterSuccess)) {
            request.afterSuccess({ getState });
          }
        }
        deferred.resolve();
      });
  } else {
    superAgent[method](url)
      .end((err, res) => {
        if (!err) {
          next({
            type: successType,
            response: res.body
          });

          if (_.isFunction(request.afterSuccess)) {
            request.afterSuccess({ getState });
          }
        }
        deferred.resolve();
      });
  }

  return deferred.promise;
};
