/* eslint-disable */
import { mergeProps, type Component } from 'solid-js';

import type { JSXIntrinsicElementAttrs } from '~/types/jsx.js';

export interface Devices28Props extends JSXIntrinsicElementAttrs<'svg'> {
  /**
   * Icon size. This is value will be passed to the SVG's width and height attributes.
   * @default 28
   */
  size?: JSXIntrinsicElementAttrs<'svg'>['width'];
}

export const Devices28: Component<Devices28Props> = (props) => {
  const merged = mergeProps({ size: 28 }, props);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width={merged.size} height={merged.size} {...props}><path fill="currentColor" fill-rule="evenodd" d="M4.03 7.904a2.886 2.886 0 0 1 2.886-2.886h16.741a.9.9 0 0 1 0 1.8H6.917c-.6 0-1.086.486-1.086 1.086v12.9h9.633a.9.9 0 1 1 0 1.8H2.004a.9.9 0 0 1 0-1.8h2.027zm16.932 3.77c-.6 0-1.086.487-1.086 1.087v6.956c0 .6.486 1.086 1.085 1.086h3.051c.6 0 1.086-.486 1.086-1.086v-6.956c0-.6-.486-1.086-1.086-1.086zm-2.886 1.087a2.886 2.886 0 0 1 2.886-2.886h3.05a2.886 2.886 0 0 1 2.886 2.886v6.956a2.886 2.886 0 0 1-2.886 2.886h-3.05a2.886 2.886 0 0 1-2.886-2.886z" clip-rule="evenodd"/></svg>
  );
}