import setDataImmutable from './setDataImmutable';
import pages from './pages';

class Page {
  config: any;

  constructor(config: any) {
    this.config = {
      setData: this.setData.bind(this),
      data: {},
      ...config,
    };
  }

  setData(data: any) {
    this.config.data = setDataImmutable(this.config.data, data);
  }

  ready() {
    this.config.onReady();
  }

  load() {
    this.config.onLoad({});
    this.show();
  }

  unload() {
    this.config.onUnload();
  }

  show() {
    this.config.onShow();
  }

  hide() {
    this.config.onHide();
  }

  pullDownRefresh() {
    return this.config.onPullDownRefresh();
  }

  reachBottom() {
    this.config.onReachBottom();
  }

  pageScroll() {
    this.config.onPageScroll();
  }

  shareAppMessage() {
    this.config.onShareAppMessage({
      from: 'menu',
      target: undefined,
      webViewUrl: 'https://www.alipay.com',
    });
  }

  shareTimeline() {
    this.config.onShareTimeline({
      from: 'menu',
      target: undefined,
      webViewUrl: 'https://www.alipay.com',
    });
  }

  titleClick() {
    this.config.onTitleClick();
  }

  optionMenuClick() {
    this.config.onOptionMenuClick();
  }

  popMenuClick() {
    this.config.onPopMenuClick();
  }

  pullIntercept() {
    this.config.onPullIntercept();
  }

  back() {
    this.config.events.onBack.apply(this.config);
  }

  keyboardHeight() {
    this.config.events.onKeyboardHeight.apply(this.config);
  }
  tabItemTap() {
    this.config.events.onTabItemTap.apply(this.config);
    this.config.onTabItemTap();
  }
  beforeTabItemTap() {
    this.config.events.beforeTabItemTap.apply(this.config);
  }
  resize() {
    this.config.events.onResize.apply(this.config);
    this.config.onResize();
  }
}

export default function PageConstructor(config: any) {
  const page = new Page(config);
  pages.push(page.config);
  return page;
}
