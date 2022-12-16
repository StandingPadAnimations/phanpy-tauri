export default function openCompose(opts) {
  const url = new URL('/compose/', window.location);
  const { width: screenWidth, height: screenHeight } = window.screen;
  const left = Math.max(0, (screenWidth - 600) / 2);
  const top = Math.max(0, (screenHeight - 450) / 2);
  const width = Math.min(screenWidth, 600);
  const height = Math.min(screenHeight, 450);
  const newWin = window.open(
    url,
    'compose' + Math.random(),
    `width=${width},height=${height},left=${left},top=${top}`,
  );

  if (newWin) {
    if (masto) {
      newWin.masto = masto;
    }

    newWin.__COMPOSE__ = opts;
  }

  return newWin;
}
