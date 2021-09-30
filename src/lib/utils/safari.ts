// Download files for IE or Edge(not chromium) browser
export const safariBlobDownload = (blob: Blob, filename: string): void => {
  const link = document.createElement('a');
  link.download = filename;

  // webkitURL is deprecated.
  link.href = window.webkitURL.createObjectURL(blob);
  link.click();

  setTimeout(() => link.remove(), 0);
};
