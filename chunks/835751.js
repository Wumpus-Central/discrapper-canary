Object.defineProperty(t, "__esModule", { value: !0 }), (t.IntlManager = t.DEFAULT_LOCALE = void 0);
let n = r(896745),
    i = r(668317),
    o = r(624067);
(t.DEFAULT_LOCALE = "en-US"),
    (t.IntlManager = class {
        constructor({
            initialLocale: e = t.DEFAULT_LOCALE,
            defaultLocale: r = t.DEFAULT_LOCALE,
            formatConfig: i = n.DEFAULT_FORMAT_CONFIG,
            forceLookupMatcher: a = !1,
        }) {
            (this.onLocaleChange = (e) => (
                this._localeSubscriptions.add(e), () => this._localeSubscriptions.delete(e)
            )),
                (this.currentLocale = e),
                (this.defaultLocale = r),
                (this.formatConfig = i),
                (this._forceLookupMatcher = a),
                (this.data = (0, o.makeDataFormatters)(
                    [this.currentLocale, this.defaultLocale],
                    this.formatConfig,
                    this._forceLookupMatcher,
                )),
                (this._localeSubscriptions = new Set());
        }
        withFormatters(e) {
            for (let [t, r] of Object.entries(e)) this[t] = this.makeFormatFunction(r);
            return this;
        }
        makeFormatFunction({ format: e, builder: t }) {
            let r = e.bind(this);
            return (e, n) => (null == e ? null : r(e(this.currentLocale), n, t));
        }
        setLocale(e) {
            (this.currentLocale = e),
                (this.data = (0, o.makeDataFormatters)(
                    [this.currentLocale, this.defaultLocale],
                    this.formatConfig,
                    this._forceLookupMatcher,
                )),
                this.emitLocaleChange(e);
        }
        emitLocaleChange(e) {
            for (let t of this._localeSubscriptions) t(e);
        }
        string(e) {
            return null == e ? "" : e(this.currentLocale).reserialize();
        }
        reserialize(e) {
            if (null == e) return "";
            let t = e(this.currentLocale);
            return "string" == typeof t ? t : t.reserialize();
        }
        bindFormatValues(e, t, r) {
            return (0, i.bindFormatValues)({
                Builder: e,
                nodes: t.ast,
                locales: [this.currentLocale, this.defaultLocale],
                dataFormatters: this.data,
                formatConfig: this.formatConfig,
                values: r,
                keyPrefix: "",
            });
        }
    });
