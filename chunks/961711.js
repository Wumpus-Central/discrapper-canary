Object.defineProperty(n, '__esModule', { value: !0 }), (n.IntlManager = n.DEFAULT_LOCALE = void 0);
let i = r(942267),
    a = r(403725),
    o = r(993477);
n.DEFAULT_LOCALE = 'en-US';
class s {
    constructor({ initialLocale: e = n.DEFAULT_LOCALE, defaultLocale: r = n.DEFAULT_LOCALE }) {
        (this.onLocaleChange = (e) => (this._localeSubscriptions.add(e), () => this._localeSubscriptions.delete(e))),
            (this.currentLocale = e),
            (this.defaultLocale = r),
            (this.formatConfig = o.DEFAULT_FORMAT_CONFIG),
            (this.intl = (0, i.createIntl)({
                formats: o.DEFAULT_FORMAT_CONFIG,
                defaultLocale: r,
                locale: r
            })),
            (this._localeSubscriptions = new Set());
    }
    withFormatters(e) {
        for (let [n, r] of Object.entries(e)) this[n] = this.makeFormatFunction(r);
        return this;
    }
    makeFormatFunction({ format: e, builder: n }) {
        let r = e.bind(this);
        return (e, i) => (null == e ? null : r(e(this.currentLocale), i, n));
    }
    setLocale(e) {
        (this.currentLocale = e),
            (this.intl = (0, i.createIntl)({
                defaultLocale: this.defaultLocale,
                locale: e
            })),
            this.emitLocaleChange(e);
    }
    emitLocaleChange(e) {
        for (let n of this._localeSubscriptions) n(e);
    }
    string(e) {
        return null == e ? '' : e(this.currentLocale).reserialize();
    }
    reserialize(e) {
        if (null == e) return '';
        let n = e(this.currentLocale);
        return 'string' == typeof n ? n : n.reserialize();
    }
    bindFormatValues(e, n, r) {
        return (0, a.bindFormatValues)(e, n.ast, [this.currentLocale, this.defaultLocale], this.intl.formatters, this.formatConfig, r);
    }
}
n.IntlManager = s;
