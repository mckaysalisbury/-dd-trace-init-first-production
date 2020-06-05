import ddTrace from 'dd-trace';

if (process.env.DATADOG_ENABLED === 'true') {
  ddTrace.init();
}

export { }
