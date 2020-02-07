import ddTrace from 'dd-trace';

if (process.env.NODE_ENV === 'production') {
  ddTrace.init();
}

export { }
