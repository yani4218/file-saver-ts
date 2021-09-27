import * as detectModule from '../src/lib/utils/detect-browser';

describe('Detect IE or Edge(not chromium) browser', () => {
    test('not IE', () => {
        expect(detectModule.isIE()).toBeFalsy();
    });

    test('is IE (substring: MSIE )', () => {
        const spy = jest.spyOn(detectModule, 'getUserAgent');
        spy.mockReturnValue('MSIE ');

        expect(detectModule.isIE()).toBeTruthy();
    });

    test('is IE (substring: Trident/ )', () => {
        const spy = jest.spyOn(detectModule, 'getUserAgent');
        spy.mockReturnValue('Trident/');

        expect(detectModule.isIE()).toBeTruthy();
    });

    test('is IE (substring: Edge )', () => {
        const userAgentSpy = jest.spyOn(detectModule, 'getUserAgent');
        userAgentSpy.mockReturnValue('Edge');

        const vendorSpy = jest.spyOn(detectModule, 'getVendor');
        vendorSpy.mockReturnValue('');

        expect(detectModule.isIE()).toBeTruthy();
    });
});

describe('Detect Safari browser', () => {
    test('not Safary', () => {
        const vendorSpy = jest.spyOn(detectModule, 'getVendor');
        vendorSpy.mockReturnValue('Google Inc');

        const userAgentSpy = jest.spyOn(detectModule, 'getUserAgent');
        userAgentSpy.mockReturnValue('CriOS FxiOS');

        expect(detectModule.isSafari()).toBeFalsy();
    });

    test('not Safary (vendor: Apple, userAgent has CriOS )', () => {
        const vendorSpy = jest.spyOn(detectModule, 'getVendor');
        vendorSpy.mockReturnValue('Apple');

        const userAgentSpy = jest.spyOn(detectModule, 'getUserAgent');
        userAgentSpy.mockReturnValue('CriOS');

        expect(detectModule.isSafari()).toBeFalsy();
    });

    test('not Safary (vendor: Apple, userAgent has FxiOS )', () => {
        const vendorSpy = jest.spyOn(detectModule, 'getVendor');
        vendorSpy.mockReturnValue('Apple');

        const userAgentSpy = jest.spyOn(detectModule, 'getUserAgent');
        userAgentSpy.mockReturnValue('FxiOS');

        expect(detectModule.isSafari()).toBeFalsy();
    });

    test('is Safary', () => {
        const vendorSpy = jest.spyOn(detectModule, 'getVendor');
        vendorSpy.mockReturnValue('Apple');

        const userAgentSpy = jest.spyOn(detectModule, 'getUserAgent');
        userAgentSpy.mockReturnValue('test user agent.');

        expect(detectModule.isSafari()).toBeTruthy();
    });
});
