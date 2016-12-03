import Raven from 'raven-js';

const sentry_key = 'd9c2b0dd3fc44a93a6a2b9918eb70ff9';
const sentry_app = '119347';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
