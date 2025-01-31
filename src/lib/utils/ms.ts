// Download files for IE or Edge(not chromium) browser
export const msBlobDownload = (blob: Blob, filename: string): void => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const navigator: any = window.navigator;
    navigator.msSaveBlob(blob, filename);
};
