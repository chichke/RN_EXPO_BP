import i18n from 'i18n-js';
import { I18nManager } from 'react-native';
import * as Localization from 'expo-localization';
import memoize from 'lodash.memoize';
import { fr, en } from './locales';

const t = memoize((key, config) => i18n.t(key, config));

const { isRTL } = Localization;

t.cache.clear();
// update layout direction
I18nManager.forceRTL(isRTL);
// set i18n-js config
i18n.translations = { fr, en };

i18n.defaultLocale = 'en';

i18n.locale = Localization.locale;

i18n.fallbacks = true;

export default t;
