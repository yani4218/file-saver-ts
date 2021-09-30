import * as fileSaveModule from '../src/lib/file-save-as';
import * as detectBrowserModule from '../src/lib/utils/detect-browser';
import * as msDownloadModule from '../src/lib/utils/ms';
import * as safariDownloadModule from '../src/lib/utils/safari';
import * as chromiumDownloadModule from '../src/lib/utils/chromium';

describe('File saver function.', () => {
  let msBlobDownloadSpy: jest.SpyInstance<void, [Blob, string]>;
  let safariBlobDownloadSpy: jest.SpyInstance<void, [Blob, string]>;
  let chromiumBlobDownloadSpy: jest.SpyInstance<void, [Blob, string]>;

  beforeEach(() => {
    jest.clearAllMocks();

    msBlobDownloadSpy = jest
      .spyOn(msDownloadModule, 'msBlobDownload')
      .mockImplementation(() => {});

    safariBlobDownloadSpy = jest
      .spyOn(safariDownloadModule, 'safariBlobDownload')
      .mockImplementation(() => {});

    chromiumBlobDownloadSpy = jest
      .spyOn(chromiumDownloadModule, 'chromiumBlobDownload')
      .mockImplementation(() => {});
  });

  test('call msBlobDownload function', () => {
    const blob = new Blob();
    const isIESpy = jest
      .spyOn(detectBrowserModule, 'isIE')
      .mockReturnValue(true);

    fileSaveModule.fileSaveAs(blob, 'test');

    expect(isIESpy).toHaveBeenCalled();

    expect(msBlobDownloadSpy).toHaveBeenCalled();
    expect(safariBlobDownloadSpy).not.toHaveBeenCalled();
    expect(chromiumBlobDownloadSpy).not.toHaveBeenCalled();
  });

  test('call safariBlobDownload function', () => {
    const blob = new Blob();
    const isIESpy = jest
      .spyOn(detectBrowserModule, 'isIE')
      .mockReturnValue(false);

    const isSafariSpy = jest
      .spyOn(detectBrowserModule, 'isSafari')
      .mockReturnValue(true);

    fileSaveModule.fileSaveAs(blob, 'test');

    expect(isIESpy).toHaveBeenCalled();
    expect(isSafariSpy).toHaveBeenCalled();

    expect(msBlobDownloadSpy).not.toHaveBeenCalled();
    expect(safariBlobDownloadSpy).toHaveBeenCalled();
    expect(chromiumBlobDownloadSpy).not.toHaveBeenCalled();
  });

  test('call chromiumBlobDownload function', () => {
    const blob = new Blob();
    const isIESpy = jest
      .spyOn(detectBrowserModule, 'isIE')
      .mockReturnValue(false);

    const isSafariSpy = jest
      .spyOn(detectBrowserModule, 'isSafari')
      .mockReturnValue(false);

    fileSaveModule.fileSaveAs(blob, 'test');

    expect(isIESpy).toHaveBeenCalled();
    expect(isSafariSpy).toHaveBeenCalled();

    expect(msBlobDownloadSpy).not.toHaveBeenCalled();
    expect(safariBlobDownloadSpy).not.toHaveBeenCalled();
    expect(chromiumBlobDownloadSpy).toHaveBeenCalled();
  });
});
