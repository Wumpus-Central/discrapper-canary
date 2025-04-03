n.d(t, {
    m: () => _,
    q: () => c
}),
    n(47120),
    n(230036),
    n(301563),
    n(411104);
var r = n(836560),
    i = n(400053),
    o = n.n(i),
    a = n(142494);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
(n.g.IntlMessageFormat = o()), n(770801), n(177486), n(144062), n(750854), n(198823), n(551576), n(682422), n(760388), n(725589), n(338770), n(99783), n(740635), n(523332), n(307163), n(636681), n(209012), n(651811), n(740191), n(407837), n(372097), n(894996), n(829028), n(750879), n(952874), n(185851), n(962066), n(519708), n(180583), delete n.g.IntlMessageFormat, 'undefined' == typeof Intl && n(211604);
let l = 'en-US';
function c() {
    let e;
    return null != (e = (Array.isArray(navigator.languages) ? navigator.languages[0] : null) || navigator.language || navigator.browserLanguage || navigator.userLanguage) ? e : '';
}
class u {
    getMessages() {
        return this._parsedMessages;
    }
    constructor(e) {
        s(this, '_context', {
            messages: {},
            defaultMessages: {},
            locale: l
        }),
            s(this, '_parsedMessages', {}),
            s(this, '_getParsedMessages', void 0),
            (this._getParsedMessages = e);
    }
}
class d extends u {
    refresh(e) {
        (this._context = e), this._refresh(e, this._parsedMessages);
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            s(this, '_refresh', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (
                    Object.keys(e.defaultMessages).forEach((r) => {
                        Object.defineProperty(n, r, {
                            configurable: !0,
                            get: () => (delete n[r], (n[r] = t._getParsedMessages(e, r, t._refresh)))
                        });
                    }),
                    n
                );
            });
    }
}
class f extends u {
    refresh(e) {
        Object.assign(this._context, e),
            Object.keys(this._parsedMessages).forEach((e) => {
                delete this._parsedMessages[e];
            });
    }
    constructor(e) {
        var t;
        super(e),
            (t = this),
            s(this, '_createProxy', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t._context;
                return new Proxy({}, { get: (n, r) => n[r] || (n[r] = t._getParsedMessages(e, r, t._createProxy)) });
            }),
            (this._parsedMessages = this._createProxy(this._context));
    }
}
class _ extends r.EventEmitter {
    updateMessagesForExperiment(e, t) {
        let n = this._fetchMessages(e);
        if (n instanceof Promise)
            return void n.then((n) => {
                this._applyMessagesForLocale(t(n), e);
            });
        this._applyMessagesForLocale(t(n), e);
    }
    setLocale(e) {
        if (this._chosenLocale === e) return;
        this._requestedLocale = e;
        let t = this._chosenLocale;
        (this._chosenLocale = e), (this.loadPromise = this._loadMessagesForLocale(e)), this.emit('locale', this._chosenLocale, t);
    }
    setUpdateRules(e) {
        (0, a.yR)(e);
    }
    getLanguages() {
        return this._languages;
    }
    getAvailableLocales() {
        return this._languages
            .filter((e) => {
                let { enabled: t } = e;
                return t;
            })
            .map((e) => {
                var t;
                let { code: n, name: r } = e;
                return {
                    value: n,
                    name: r,
                    localizedName: null != (t = this.Messages[n]) ? t : r
                };
            })
            .sort((e, t) => {
                let { name: n } = e,
                    { name: r } = t;
                return (n = n.toLowerCase()) < (r = r.toLowerCase()) ? -1 : +(n > r);
            });
    }
    getLocale() {
        return this._chosenLocale;
    }
    getLocaleInfo() {
        return this._languages.find((e) => e.code === this._chosenLocale);
    }
    getDefaultLocale() {
        var e, t, n;
        let r = null != (e = c()) ? e : l,
            i = this._languages
                .filter((e) => {
                    let { enabled: t } = e;
                    return t;
                })
                .map((e) => {
                    let { code: t } = e;
                    return t;
                });
        if (i.includes(r)) return r;
        let o = r.split('-');
        return i.includes(o[0]) ? o[0] : 'zh' === o[0] && o.length > 1 && 'Hant' === o[1] ? (null != (t = i.find((e) => 'zh-TW' === e)) ? t : l) : null != (n = i.find((e) => e.split('-')[0] === o[0])) ? n : l;
    }
    _loadMessagesForLocale(e) {
        let t = this._fetchMessages(e);
        return t instanceof Promise ? t.then((t) => this._applyMessagesForLocale(t, e)) : (this._applyMessagesForLocale(t, e), Promise.resolve());
    }
    _applyMessagesForLocale(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this._findMessages(l);
        this._requestedLocale === t &&
            (this._provider.refresh({
                messages: e,
                defaultMessages: n,
                locale: t
            }),
            this.resolveLanguageLoaded());
    }
    _findMessages(e) {
        let t = this._fetchMessages(e);
        if (t instanceof Promise) throw Error('Messages are still loading.');
        return t;
    }
    _fetchMessages(e) {
        let t =
            e === l
                ? () => {
                      throw Error('Error Loading '.concat(l));
                  }
                : () => ((console.warn('Unsupported Locale', e), -1 === e.indexOf('-')) ? this._fetchMessages(l) : this._fetchMessages(e.split('-')[0]));
        try {
            let n = this._getMessages(e);
            return n instanceof Promise ? n.catch(t) : n;
        } catch (e) {
            return t();
        }
    }
    constructor({ initialLocale: e, getMessages: t, getLanguages: r }) {
        super(),
            s(this, 'Messages', void 0),
            s(this, 'loadPromise', Promise.resolve()),
            s(this, 'initialLanguageLoad', void 0),
            s(this, 'resolveLanguageLoaded', () => {}),
            s(this, '_languages', []),
            s(this, '_provider', void 0),
            s(this, '_chosenLocale', ''),
            s(this, '_requestedLocale', void 0),
            s(this, '_getMessages', void 0),
            s(this, '_getParsedMessages', (e, t, n) => {
                let { messages: r, defaultMessages: i, locale: o } = e,
                    s = r[t] || i[t];
                if ('object' == typeof s)
                    return n({
                        messages: s,
                        defaultMessages: i[t],
                        locale: o
                    });
                try {
                    return (0, a.FC)(s, o);
                } catch (e) {
                    if ((console.warn("Failed parsing intl key '".concat(String(t), "' in locale '").concat(o, "' defaulting to English"), e), 'string' == typeof (s = i[t]))) return (0, a.FC)(s, o);
                }
                return '';
            }),
            s(this, '_handleNewListener', (e) => {
                'locale' === e && this.emit(e, this._chosenLocale);
            }),
            (this.initialLanguageLoad = new Promise((e, t) => {
                this.resolveLanguageLoaded = e;
            })),
            Intl.__addLocaleData && Intl.__addLocaleData(n(201688)),
            (this._languages = r()),
            (this._provider = null != window.Proxy ? new f(this._getParsedMessages) : new d(this._getParsedMessages)),
            (this.Messages = this._provider.getMessages()),
            (this._getMessages = t);
        try {
            new Intl.NumberFormat(e, {}), this.setLocale(e || this.getDefaultLocale());
        } catch (e) {
            this.setLocale(this.getDefaultLocale());
        }
        this.on('newListener', this._handleNewListener);
    }
}
