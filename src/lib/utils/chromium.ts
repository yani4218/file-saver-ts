export const getFileLink = (
  blob: Blob,
  filename: string,
): HTMLAnchorElement | null => {
  if (window.URL) {
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.style.display = 'none';
    link.href = url;
    link.download = filename;

    return link;
  }

  return null;
};

export const chromiumBlobDownload = (blob: Blob, filename: string): void => {
  const link = getFileLink(blob, filename);
  if (link) {
    link?.click();

    setTimeout(() => link?.remove());
  }
};
