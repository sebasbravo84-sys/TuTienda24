/* global __PROMO_MES__ */
import { useSyncExternalStore } from 'react';
import { getPromoMes } from '../PRECIOS.js';

const subscribe = () => () => {};

// Durante la hidratación usa el mes con el que se armó el HTML (__PROMO_MES__) y luego
// pasa al mes actual del visitante, así nunca queda desfasado ni rompe la hidratación.
export function usePromoMes() {
  return useSyncExternalStore(subscribe, () => getPromoMes(), () => __PROMO_MES__);
}
