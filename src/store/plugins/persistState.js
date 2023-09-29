import SecureLS from 'secure-ls';
import debounce from 'lodash.debounce';
import config from '@/config';

export class SecureStorage extends SecureLS {
  constructor(_config) {
    super(_config);
    super.ls = _config.useSessionStore ? sessionStorage : localStorage;
  }
}

const persistPlugin = (storeName, { type = 'ls' } = {}) => {
  const ls = new SecureStorage({ isCompression: false });
  const ss = new SecureStorage({ isCompression: false, useSessionStore: true });

  return {
    enabled: true,
    strategies: [
      {
        key: `${config.keyStore}-${storeName}`,
        storage: {
          getItem: (key) => (type === 'ss' ? ss.get(key) : ls.get(key)),
          setItem: (key, value) => {
            debounce(
              () => {
                if (type === 'ss') ss.set(key, value);
                else ls.set(key, value);
              },
              300,
              { leading: true, trailing: true }
            );
          },
          removeItem: (key) => {
            if (type === 'ss') ss.remove(key);
            else ls.remove(key);
          },
        },
      },
    ],
  };
};

export default { persistPlugin };
