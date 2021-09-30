import { chromiumBlobDownload } from './utils/chromium';
import { isIE, isSafari } from './utils/detect-browser';
import { msBlobDownload } from './utils/ms';
import { safariBlobDownload } from './utils/safari';

/** Save file as
 * @param blob  File content.
 * @param filename  File name.
 */
export const fileSaveAs = (blob: Blob, filename: string): void => {
  return isIE()
    ? msBlobDownload(blob, filename)
    : isSafari()
    ? safariBlobDownload(blob, filename)
    : chromiumBlobDownload(blob, filename);
};
