export const getUserAgent = (): string => window.navigator.userAgent;
export const getVendor = (): string => window.navigator?.vendor ?? '';

export const checkSubString = (subString: string) => {
  return getUserAgent().indexOf(subString);
};

export const isIE = (): boolean => {
  return (
    checkSubString('MSIE ') > -1 ||
    checkSubString('Trident/') > -1 ||
    (checkSubString('Edge') > -1 && !getVendor())
  );
};

export const isSafari = (): boolean => {
  return Boolean(
    getVendor().indexOf('Apple') > -1 &&
      checkSubString('CriOS') === -1 &&
      checkSubString('FxiOS') === -1,
  );
};
