export function delay(milliSeconds: number) {
  return new Promise(resolve => {
    const timeoutHandler = setTimeout(() => {
      resolve(true);
      clearTimeout(timeoutHandler);
    }, milliSeconds);
  });
}
