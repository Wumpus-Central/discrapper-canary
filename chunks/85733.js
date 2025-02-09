var i = n(478497),
    r = n(995769),
    a = n(606956),
    s = Object.prototype.hasOwnProperty,
    o = {
        brackets: function (e) {
            return e + '[]';
        },
        comma: 'comma',
        indices: function (e, t) {
            return e + '[' + t + ']';
        },
        repeat: function (e) {
            return e;
        }
    },
    l = Array.isArray,
    u = Array.prototype.push,
    c = function (e, t) {
        u.apply(e, l(t) ? t : [t]);
    },
    d = Date.prototype.toISOString,
    f = a.default,
    _ = {
        addQueryPrefix: !1,
        allowDots: !1,
        allowEmptyArrays: !1,
        arrayFormat: 'indices',
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encodeDotInKeys: !1,
        encoder: r.encode,
        encodeValuesOnly: !1,
        format: f,
        formatter: a.formatters[f],
        indices: !1,
        serializeDate: function (e) {
            return d.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    p = function (e) {
        return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e || 'symbol' == typeof e || 'bigint' == typeof e;
    },
    h = {},
    m = function e(t, n, a, s, o, u, d, f, m, g, E, v, y, I, T, b, S, A) {
        for (var N, C = t, R = A, O = 0, D = !1; void 0 !== (R = R.get(h)) && !D; ) {
            var L = R.get(t);
            if (((O += 1), void 0 !== L)) {
                if (L === O) throw RangeError('Cyclic object value');
                D = !0;
            }
            void 0 === R.get(h) && (O = 0);
        }
        if (
            ('function' == typeof g
                ? (C = g(n, C))
                : C instanceof Date
                  ? (C = y(C))
                  : 'comma' === a &&
                    l(C) &&
                    (C = r.maybeMap(C, function (e) {
                        return e instanceof Date ? y(e) : e;
                    })),
            null === C)
        ) {
            if (u) return m && !b ? m(n, _.encoder, S, 'key', I) : n;
            C = '';
        }
        if (p(C) || r.isBuffer(C)) return m ? [T(b ? n : m(n, _.encoder, S, 'key', I)) + '=' + T(m(C, _.encoder, S, 'value', I))] : [T(n) + '=' + T(String(C))];
        var x = [];
        if (void 0 === C) return x;
        if ('comma' === a && l(C)) b && m && (C = r.maybeMap(C, m)), (N = [{ value: C.length > 0 ? C.join(',') || null : void 0 }]);
        else if (l(g)) N = g;
        else {
            var w = Object.keys(C);
            N = E ? w.sort(E) : w;
        }
        var P = f ? n.replace(/\./g, '%2E') : n,
            M = s && l(C) && 1 === C.length ? P + '[]' : P;
        if (o && l(C) && 0 === C.length) return M + '[]';
        for (var k = 0; k < N.length; ++k) {
            var U = N[k],
                G = 'object' == typeof U && void 0 !== U.value ? U.value : C[U];
            if (!d || null !== G) {
                var B = v && f ? U.replace(/\./g, '%2E') : U,
                    Z = l(C) ? ('function' == typeof a ? a(M, B) : M) : M + (v ? '.' + B : '[' + B + ']');
                A.set(t, O);
                var F = i();
                F.set(h, A), c(x, e(G, Z, a, s, o, u, d, f, 'comma' === a && b && l(C) ? null : m, g, E, v, y, I, T, b, S, F));
            }
        }
        return x;
    },
    g = function (e) {
        if (!e) return _;
        if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays) throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
        if (void 0 !== e.encodeDotInKeys && 'boolean' != typeof e.encodeDotInKeys) throw TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var t,
            n = e.charset || _.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var i = a.default;
        if (void 0 !== e.format) {
            if (!s.call(a.formatters, e.format)) throw TypeError('Unknown format option provided.');
            i = e.format;
        }
        var r = a.formatters[i],
            u = _.filter;
        if ((('function' == typeof e.filter || l(e.filter)) && (u = e.filter), (t = e.arrayFormat in o ? e.arrayFormat : 'indices' in e ? (e.indices ? 'indices' : 'repeat') : _.arrayFormat), 'commaRoundTrip' in e && 'boolean' != typeof e.commaRoundTrip)) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
        var c = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || _.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : _.addQueryPrefix,
            allowDots: c,
            allowEmptyArrays: 'boolean' == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : _.allowEmptyArrays,
            arrayFormat: t,
            charset: n,
            charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : _.charsetSentinel,
            commaRoundTrip: e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? _.delimiter : e.delimiter,
            encode: 'boolean' == typeof e.encode ? e.encode : _.encode,
            encodeDotInKeys: 'boolean' == typeof e.encodeDotInKeys ? e.encodeDotInKeys : _.encodeDotInKeys,
            encoder: 'function' == typeof e.encoder ? e.encoder : _.encoder,
            encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : _.encodeValuesOnly,
            filter: u,
            format: i,
            formatter: r,
            serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : _.serializeDate,
            skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : _.skipNulls,
            sort: 'function' == typeof e.sort ? e.sort : null,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : _.strictNullHandling
        };
    };
e.exports = function (e, t) {
    var n,
        r,
        a = e,
        s = g(t);
    'function' == typeof s.filter ? (a = (r = s.filter)('', a)) : l(s.filter) && (n = r = s.filter);
    var u = [];
    if ('object' != typeof a || null === a) return '';
    var d = o[s.arrayFormat],
        f = 'comma' === d && s.commaRoundTrip;
    n || (n = Object.keys(a)), s.sort && n.sort(s.sort);
    for (var _ = i(), p = 0; p < n.length; ++p) {
        var h = n[p];
        (!s.skipNulls || null !== a[h]) && c(u, m(a[h], h, d, f, s.allowEmptyArrays, s.strictNullHandling, s.skipNulls, s.encodeDotInKeys, s.encode ? s.encoder : null, s.filter, s.sort, s.allowDots, s.serializeDate, s.format, s.formatter, s.encodeValuesOnly, s.charset, _));
    }
    var E = u.join(s.delimiter),
        v = !0 === s.addQueryPrefix ? '?' : '';
    return s.charsetSentinel && ('iso-8859-1' === s.charset ? (v += 'utf8=%26%2310003%3B&') : (v += 'utf8=%E2%9C%93&')), E.length > 0 ? v + E : '';
};
