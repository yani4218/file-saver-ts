import * as chromiumModule from '../src/lib/utils/chromium';

describe('Chromium download', () => {
    test('call getFileLink function', () => {
        const blob = new Blob();
        const spy = jest.spyOn(chromiumModule, 'getFileLink');
        spy.mockReturnValue(null);

        chromiumModule.chromiumBlobDownload(blob, 'test');

        expect(spy).toHaveBeenCalledWith(blob, 'test');
    });
});
