import * as chromiumModule from '../src/lib/utils/chromium';

describe('Chromium download', () => {
  test('call getFileLink function', () => {
    const blob = new Blob();
    const getFileLinkSpy = jest.spyOn(chromiumModule, 'getFileLink');
    getFileLinkSpy.mockReturnValue(null);

    chromiumModule.chromiumBlobDownload(blob, 'test');

    expect(getFileLinkSpy).toHaveBeenCalledWith(blob, 'test');
  });
});
