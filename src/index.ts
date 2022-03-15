export function createSheet(container: HTMLElement) {
  const canvas = document.createElement('canvas');
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  container.appendChild(canvas);
  resetCanvas(canvas);
  window.addEventListener('resize', () => {
    resetCanvas(canvas);
  })
}

function resetCanvas(canvas: HTMLCanvasElement) {
  const computedStyle = getComputedStyle(canvas, null)
  const width = parseInt(computedStyle.width)
  const height = parseInt(computedStyle.height)
  const dpr = window.devicePixelRatio;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
}