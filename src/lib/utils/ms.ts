// Download files for IE or Edge(not chromium) browser
export const msBlobDownload = (blob: Blob, filename: string): void => {
  const navigator: any = window.navigator;
  navigator.msSaveBlob(blob, filename);
};
