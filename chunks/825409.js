r.d(n, {
    m: function () {
        return m;
    },
    q: function () {
        return f;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(836560);
var s = r(400053),
    l = r.n(s),
    u = r(142494);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
(r.g.IntlMessageFormat = l()), r(770801), r(177486), r(144062), r(750854), r(198823), r(551576), r(682422), r(760388), r(725589), r(338770), r(99783), r(740635), r(523332), r(307163), r(636681), r(209012), r(651811), r(740191), r(407837), r(372097), r(894996), r(829028), r(750879), r(952874), r(185851), r(962066), r(519708), r(180583), delete r.g.IntlMessageFormat, 'undefined' == typeof Intl && r(211604);
let d = 'en-US';
function f() {
    let e;
    return null != (e = (Array.isArray(navigator.languages) ? navigator.languages[0] : null) || navigator.language || navigator.browserLanguage || navigator.userLanguage) ? e : '';
}
class p {
    getMessages() {
        return this._parsedMessages;
    }
    constructor(e) {
        c(this, '_context', {
            messages: {},
            defaultMessages: {},
            locale: d
        }),
            c(this, '_parsedMessages', {}),
            c(this, '_getParsedMessages', void 0),
            (this._getParsedMessages = e);
    }
}
class h extends p {
    refresh(e) {
        (this._context = e), this._refresh(e, this._parsedMessages);
    }
    constructor(...e) {
        var n;
        super(...e),
            (n = this),
            c(this, '_refresh', function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (
                    Object.keys(e.defaultMessages).forEach((i) => {
                        Object.defineProperty(r, i, {
                            configurable: !0,
                            get: () => (delete r[i], (r[i] = n._getParsedMessages(e, i, n._refresh)))
                        });
                    }),
                    r
                );
            });
    }
}
class _ extends p {
    refresh(e) {
        Object.assign(this._context, e),
            Object.keys(this._parsedMessages).forEach((e) => {
                delete this._parsedMessages[e];
            });
    }
    constructor(e) {
        var n;
        super(e),
            (n = this),
            c(this, '_createProxy', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n._context;
                return new Proxy({}, { get: (r, i) => r[i] || (r[i] = n._getParsedMessages(e, i, n._createProxy)) });
            }),
            (this._parsedMessages = this._createProxy(this._context));
    }
}
class m extends o.EventEmitter {
    updateMessagesForExperiment(e, n) {
        let r = this._fetchMessages(e);
        if (r instanceof Promise) {
            r.then((r) => {
                this._applyMessagesForLocale(n(r), e);
            });
            return;
        }
        this._applyMessagesForLocale(n(r), e);
    }
    setLocale(e) {
        if (this._chosenLocale === e) return;
        this._requestedLocale = e;
        let n = this._chosenLocale;
        (this._chosenLocale = e), (this.loadPromise = this._loadMessagesForLocale(e)), this.emit('locale', this._chosenLocale, n);
    }
    setUpdateRules(e) {
        (0, u.yR)(e);
    }
    getLanguages() {
        return this._languages;
    }
    getAvailableLocales() {
        return this._languages
            .filter((e) => {
                let { enabled: n } = e;
                return n;
            })
            .map((e) => {
                var n;
                let { code: r, name: i } = e;
                return {
                    value: r,
                    name: i,
                    localizedName: null !== (n = this.Messages[r]) && void 0 !== n ? n : i
                };
            })
            .sort((e, n) => {
                let { name: r } = e,
                    { name: i } = n;
                return (r = r.toLowerCase()), r < (i = i.toLowerCase()) ? -1 : r > i ? 1 : 0;
            });
    }
    getLocale() {
        return this._chosenLocale;
    }
    getLocaleInfo() {
        return this._languages.find((e) => e.code === this._chosenLocale);
    }
    getDefaultLocale() {
        var e, n, r;
        let i = null !== (e = f()) && void 0 !== e ? e : d,
            a = this._languages
                .filter((e) => {
                    let { enabled: n } = e;
                    return n;
                })
                .map((e) => {
                    let { code: n } = e;
                    return n;
                });
        if (a.includes(i)) return i;
        let o = i.split('-');
        return a.includes(o[0]) ? o[0] : 'zh' === o[0] && o.length > 1 && 'Hant' === o[1] ? (null !== (n = a.find((e) => 'zh-TW' === e)) && void 0 !== n ? n : d) : null !== (r = a.find((e) => e.split('-')[0] === o[0])) && void 0 !== r ? r : d;
    }
    _loadMessagesForLocale(e) {
        let n = this._fetchMessages(e);
        return n instanceof Promise ? n.then((n) => this._applyMessagesForLocale(n, e)) : (this._applyMessagesForLocale(n, e), Promise.resolve());
    }
    _applyMessagesForLocale(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._findMessages(d);
        this._requestedLocale === n &&
            (this._provider.refresh({
                messages: e,
                defaultMessages: r,
                locale: n
            }),
            this.resolveLanguageLoaded());
    }
    _findMessages(e) {
        let n = this._fetchMessages(e);
        if (n instanceof Promise) throw Error('Messages are still loading.');
        return n;
    }
    _fetchMessages(e) {
        let n =
            e === d
                ? () => {
                      throw Error('Error Loading '.concat(d));
                  }
                : () => ((console.warn('Unsupported Locale', e), -1 === e.indexOf('-')) ? this._fetchMessages(d) : this._fetchMessages(e.split('-')[0]));
        try {
            let r = this._getMessages(e);
            return r instanceof Promise ? r.catch(n) : r;
        } catch (e) {
            return n();
        }
    }
    constructor({ initialLocale: e, getMessages: n, getLanguages: i }) {
        super(),
            c(this, 'Messages', void 0),
            c(this, 'loadPromise', Promise.resolve()),
            c(this, 'initialLanguageLoad', void 0),
            c(this, 'resolveLanguageLoaded', () => {}),
            c(this, '_languages', []),
            c(this, '_provider', void 0),
            c(this, '_chosenLocale', ''),
            c(this, '_requestedLocale', void 0),
            c(this, '_getMessages', void 0),
            c(this, '_getParsedMessages', (e, n, r) => {
                let { messages: i, defaultMessages: a, locale: o } = e,
                    s = i[n] || a[n];
                if ('object' == typeof s)
                    return r({
                        messages: s,
                        defaultMessages: a[n],
                        locale: o
                    });
                try {
                    return (0, u.FC)(s, o);
                } catch (e) {
                    if ((console.warn("Failed parsing intl key '".concat(String(n), "' in locale '").concat(o, "' defaulting to English"), e), 'string' == typeof (s = a[n]))) return (0, u.FC)(s, o);
                }
                return '';
            }),
            c(this, '_handleNewListener', (e) => {
                if ('locale' === e) this.emit(e, this._chosenLocale);
            }),
            (this.initialLanguageLoad = new Promise((e, n) => {
                this.resolveLanguageLoaded = e;
            })),
            Intl.__addLocaleData && Intl.__addLocaleData(r(201688)),
            (this._languages = i()),
            (this._provider = null != window.Proxy ? new _(this._getParsedMessages) : new h(this._getParsedMessages)),
            (this.Messages = this._provider.getMessages()),
            (this._getMessages = n);
        try {
            new Intl.NumberFormat(e, {}), this.setLocale(e || this.getDefaultLocale());
        } catch (e) {
            this.setLocale(this.getDefaultLocale());
        }
        this.on('newListener', this._handleNewListener);
    }
}
