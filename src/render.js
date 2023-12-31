import './render.css';

import { Array, Infinity, NaN, Object, globalThis, undefined } from './mod';

export function render() {
  Array();
  Infinity();
  NaN();
  Object();
  globalThis();
  undefined();

  const el = document.createElement('div');
  el.classList.add('text');
  document.getElementsByTagName('body')[0].appendChild(el);
  el.innerHTML = 'hello, world';
}
