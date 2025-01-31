var i = n(970661),
    r = n(854160),
    a = n(896933),
    s = n(983584);
function o(e, t, n) {
    var i = 'string' == typeof e ? o.__parse(e) : e;
    if (!(i && 'messageFormatPattern' === i.type)) throw TypeError('A message must be provided as a String or AST.');
    (n = this._mergeFormats(o.formats, n)), r.defineProperty(this, '_locale', { value: this._resolveLocale(t) });
    var a = this._findPluralRuleFunction(this._locale),
        s = this._compilePattern(i, t, n, a),
        l = this;
    this.format = function (e) {
        return l._format(s, e);
    };
}
(t.default = o),
    r.defineProperty(o, 'formats', {
        enumerable: !0,
        value: {
            number: {
                currency: { style: 'currency' },
                percent: { style: 'percent' }
            },
            date: {
                short: {
                    month: 'numeric',
                    day: 'numeric',
                    year: '2-digit'
                },
                medium: {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                },
                long: {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                },
                full: {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }
            },
            time: {
                short: {
                    hour: 'numeric',
                    minute: 'numeric'
                },
                medium: {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric'
                },
                long: {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    timeZoneName: 'short'
                },
                full: {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    timeZoneName: 'short'
                }
            }
        }
    }),
    r.defineProperty(o, '__localeData__', { value: r.objCreate(null) }),
    r.defineProperty(o, '__addLocaleData', {
        value: function (e) {
            if (!(e && e.locale)) throw Error('Locale data provided to IntlMessageFormat is missing a `locale` property');
            o.__localeData__[e.locale.toLowerCase()] = e;
        }
    }),
    r.defineProperty(o, '__parse', { value: s.default.parse }),
    r.defineProperty(o, 'defaultLocale', {
        enumerable: !0,
        writable: !0,
        value: void 0
    }),
    (o.prototype.resolvedOptions = function () {
        return { locale: this._locale };
    }),
    (o.prototype._compilePattern = function (e, t, n, i) {
        return new a.default(t, n, i).compile(e);
    }),
    (o.prototype._findPluralRuleFunction = function (e) {
        for (var t = o.__localeData__, n = t[e.toLowerCase()]; n; ) {
            if (n.pluralRuleFunction) return n.pluralRuleFunction;
            n = n.parentLocale && t[n.parentLocale.toLowerCase()];
        }
        throw Error('Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :' + e);
    }),
    (o.prototype._format = function (e, t) {
        var n,
            r,
            a,
            s,
            o,
            l = '';
        for (n = 0, r = e.length; n < r; n += 1) {
            if ('string' == typeof (a = e[n])) {
                l += a;
                continue;
            }
            if (((s = a.id), !(t && i.hop.call(t, s)))) throw Error('A value must be provided for: ' + s);
            (o = t[s]), a.options ? (l += this._format(a.getOption(o), t)) : (l += a.format(o));
        }
        return l;
    }),
    (o.prototype._mergeFormats = function (e, t) {
        var n,
            a,
            s = {};
        for (n in e) i.hop.call(e, n) && ((s[n] = a = r.objCreate(e[n])), t && i.hop.call(t, n) && i.extend(a, t[n]));
        return s;
    }),
    (o.prototype._resolveLocale = function (e) {
        'string' == typeof e && (e = [e]), (e = (e || []).concat(o.defaultLocale));
        var t,
            n,
            i,
            r,
            a = o.__localeData__;
        for (t = 0, n = e.length; t < n; t += 1)
            for (i = e[t].toLowerCase().split('-'); i.length; ) {
                if ((r = a[i.join('-')])) return r.locale;
                i.pop();
            }
        var s = e.pop();
        throw Error('No locale data has been added to IntlMessageFormat for: ' + e.join(', ') + ', or the default locale: ' + s);
    });
