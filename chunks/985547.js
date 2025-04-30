var r = n(970661),
    i = n(854160),
    o = n(896933),
    a = n(983584);
function s(e, t, n) {
    var r = 'string' == typeof e ? s.__parse(e) : e;
    if (!(r && 'messageFormatPattern' === r.type)) throw TypeError('A message must be provided as a String or AST.');
    (n = this._mergeFormats(s.formats, n)), i.defineProperty(this, '_locale', { value: this._resolveLocale(t) });
    var o = this._findPluralRuleFunction(this._locale),
        a = this._compilePattern(r, t, n, o),
        l = this;
    this.format = function (e) {
        return l._format(a, e);
    };
}
(t.default = s),
    i.defineProperty(s, 'formats', {
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
    i.defineProperty(s, '__localeData__', { value: i.objCreate(null) }),
    i.defineProperty(s, '__addLocaleData', {
        value: function (e) {
            if (!(e && e.locale)) throw Error('Locale data provided to IntlMessageFormat is missing a `locale` property');
            s.__localeData__[e.locale.toLowerCase()] = e;
        }
    }),
    i.defineProperty(s, '__parse', { value: a.default.parse }),
    i.defineProperty(s, 'defaultLocale', {
        enumerable: !0,
        writable: !0,
        value: void 0
    }),
    (s.prototype.resolvedOptions = function () {
        return { locale: this._locale };
    }),
    (s.prototype._compilePattern = function (e, t, n, r) {
        return new o.default(t, n, r).compile(e);
    }),
    (s.prototype._findPluralRuleFunction = function (e) {
        for (var t = s.__localeData__, n = t[e.toLowerCase()]; n; ) {
            if (n.pluralRuleFunction) return n.pluralRuleFunction;
            n = n.parentLocale && t[n.parentLocale.toLowerCase()];
        }
        throw Error('Locale data added to IntlMessageFormat is missing a `pluralRuleFunction` for :' + e);
    }),
    (s.prototype._format = function (e, t) {
        var n,
            i,
            o,
            a,
            s,
            l = '';
        for (n = 0, i = e.length; n < i; n += 1) {
            if ('string' == typeof (o = e[n])) {
                l += o;
                continue;
            }
            if (((a = o.id), !(t && r.hop.call(t, a)))) throw Error('A value must be provided for: ' + a);
            (s = t[a]), o.options ? (l += this._format(o.getOption(s), t)) : (l += o.format(s));
        }
        return l;
    }),
    (s.prototype._mergeFormats = function (e, t) {
        var n,
            o,
            a = {};
        for (n in e) r.hop.call(e, n) && ((a[n] = o = i.objCreate(e[n])), t && r.hop.call(t, n) && r.extend(o, t[n]));
        return a;
    }),
    (s.prototype._resolveLocale = function (e) {
        'string' == typeof e && (e = [e]), (e = (e || []).concat(s.defaultLocale));
        var t,
            n,
            r,
            i,
            o = s.__localeData__;
        for (t = 0, n = e.length; t < n; t += 1)
            for (r = e[t].toLowerCase().split('-'); r.length; ) {
                if ((i = o[r.join('-')])) return i.locale;
                r.pop();
            }
        var a = e.pop();
        throw Error('No locale data has been added to IntlMessageFormat for: ' + e.join(', ') + ', or the default locale: ' + a);
    });
