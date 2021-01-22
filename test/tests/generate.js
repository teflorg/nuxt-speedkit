/* eslint-disable no-secrets/no-secrets */

import {
  getDom,
  getLinkPreloadHid
} from '../utils';

export default function (getHTML) {
  let html, dom;
  // #region /tests/v-font

  test('v-font (font assign simple) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('v-font');
    dom = getDom(html);
    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-10e6588e]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'normal')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimple[data-f-10e6588e]')).not.toBeNull();
  });

  test('v-font (font assign by single selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('v-font');
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-4d3c52af] strong')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'normal')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignBySingleSelector[data-f-4d3c52af]')).not.toBeNull();
  });

  test('v-font (font assign by multiple variances) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('v-font');
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f--d854631] strong')).not.toBe(-1);
    expect(dom.head.innerHTML.indexOf('[data-f--d854631] em')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'normal')}"]`)).not.toBeNull();
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'italic')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByMultipleVariances[data-f--d854631]')).not.toBeNull();
  });

  test('v-font (font assign by multiple selectors) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('v-font');
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-24b17869] em')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'italic')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByMultipleSelectors[data-f-24b17869]')).not.toBeNull();
  });

  test('v-font (font assign by deep selector) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('v-font');
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-773bc17a] strong>em')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'italic')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignByDeepSelector[data-f-773bc17a]')).not.toBeNull();
  });

  // #endregion

  // #region /tests/v-font-media

  test('v-font (media) (font assign simple by max 479px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('v-font-media');
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-29e4a635]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'italic', '(max-width: 479px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleByMax479[data-f-29e4a635]')).not.toBeNull();
  });

  test('v-font (media) (font assign simple by 480px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('v-font-media');
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-27c3e1ae]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'normal', '(min-width: 480px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy480[data-f-27c3e1ae]')).not.toBeNull();
  });

  test('v-font (media) (font assign simple by 960px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('v-font-media');
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f--91b8358]')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 400, 'italic', '(min-width: 960px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontAssignSimpleBy960[data-f--91b8358]')).not.toBeNull();
  });

  test('v-font (media) (font assign with selector by 1440px) (font-face, class, link (preload), element class)', async () => {
    html = await getHTML('v-font-media');
    dom = getDom(html);

    // font class exists?
    expect(dom.head.innerHTML.indexOf('[data-f-42ea1f4e] strong')).not.toBe(-1);
    // font link preload exists?
    expect(dom.head.querySelector(`link[data-hid="${getLinkPreloadHid('Comic Neue', 700, 'normal', '(min-width: 1440px)')}"]`)).not.toBeNull();
    // element has data attribute?
    expect(dom.querySelector('#criticalFontBySingleSelectorBy1440[data-f-42ea1f4e]')).not.toBeNull();
  });

  // #endregion

  // #region /tests/speedkit-image

  test('speedkit-image', async () => {
    html = await getHTML('speedkit-image');
    dom = getDom(html);

    const criticalSrcset = dom.querySelector('#criticalContainer').dataset.preloadSrcset;
    const lazySrcset = dom.querySelector('#lazyContainer').dataset.preloadSrcset;

    expect(dom.querySelector(`link[imageSrcset="${criticalSrcset}"][rel="preload"]`)).not.toBeNull();
    expect(dom.querySelector(`link[imageSrcset="${lazySrcset}"][rel="preload"]`)).toBeNull();
  });

  // #endregion

  // #region /tests/speedkit-picture

  test('speedkit-picture', async () => {
    html = await getHTML('speedkit-picture');
    dom = getDom(html);

    const criticalSrcset = dom.querySelector('#criticalContainer').dataset.preloadSrcset;
    const lazySrcset = dom.querySelector('#lazyContainer').dataset.preloadSrcset;

    expect(dom.querySelector(`link[imageSrcset="${criticalSrcset}"][rel="preload"]`)).not.toBeNull();
    expect(dom.querySelector(`link[imageSrcset="${lazySrcset}"][rel="preload"]`)).toBeNull();
  });

  // #endregion
}