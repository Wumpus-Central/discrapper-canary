var r = n(478497),
    i = n(995769),
    o = n(606956),
    a = Object.prototype.hasOwnProperty,
    s = {
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
    c = Array.prototype.push,
    u = function (e, t) {
        c.apply(e, l(t) ? t : [t]);
    },
    d = Date.prototype.toISOString,
    f = o.default,
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
        encoder: i.encode,
        encodeValuesOnly: !1,
        format: f,
        formatter: o.formatters[f],
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
    m = function e(t, n, o, a, s, c, d, f, m, g, E, b, y, v, O, I, S, T) {
        for (var N, A = t, C = T, R = 0, P = !1; void 0 !== (C = C.get(h)) && !P; ) {
            var w = C.get(t);
            if (((R += 1), void 0 !== w))
                if (w === R) throw RangeError('Cyclic object value');
                else P = !0;
            void 0 === C.get(h) && (R = 0);
        }
        if (
            ('function' == typeof g
                ? (A = g(n, A))
                : A instanceof Date
                  ? (A = y(A))
                  : 'comma' === o &&
                    l(A) &&
                    (A = i.maybeMap(A, function (e) {
                        return e instanceof Date ? y(e) : e;
                    })),
            null === A)
        ) {
            if (c) return m && !I ? m(n, _.encoder, S, 'key', v) : n;
            A = '';
        }
        if (p(A) || i.isBuffer(A)) return m ? [O(I ? n : m(n, _.encoder, S, 'key', v)) + '=' + O(m(A, _.encoder, S, 'value', v))] : [O(n) + '=' + O(String(A))];
        var D = [];
        if (void 0 === A) return D;
        if ('comma' === o && l(A)) I && m && (A = i.maybeMap(A, m)), (N = [{ value: A.length > 0 ? A.join(',') || null : void 0 }]);
        else if (l(g)) N = g;
        else {
            var L = Object.keys(A);
            N = E ? L.sort(E) : L;
        }
        var x = f ? n.replace(/\./g, '%2E') : n,
            M = a && l(A) && 1 === A.length ? x + '[]' : x;
        if (s && l(A) && 0 === A.length) return M + '[]';
        for (var k = 0; k < N.length; ++k) {
            var j = N[k],
                U = 'object' == typeof j && void 0 !== j.value ? j.value : A[j];
            if (!d || null !== U) {
                var G = b && f ? j.replace(/\./g, '%2E') : j,
                    B = l(A) ? ('function' == typeof o ? o(M, G) : M) : M + (b ? '.' + G : '[' + G + ']');
                T.set(t, R);
                var F = r();
                F.set(h, T), u(D, e(U, B, o, a, s, c, d, f, 'comma' === o && I && l(A) ? null : m, g, E, b, y, v, O, I, S, F));
            }
        }
        return D;
    },
    g = function (e) {
        if (!e) return _;
        if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays) throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
        if (void 0 !== e.encodeDotInKeys && 'boolean' != typeof e.encodeDotInKeys) throw TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var t,
            n = e.charset || _.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var r = o.default;
        if (void 0 !== e.format) {
            if (!a.call(o.formatters, e.format)) throw TypeError('Unknown format option provided.');
            r = e.format;
        }
        var i = o.formatters[r],
            c = _.filter;
        if ((('function' == typeof e.filter || l(e.filter)) && (c = e.filter), (t = e.arrayFormat in s ? e.arrayFormat : 'indices' in e ? (e.indices ? 'indices' : 'repeat') : _.arrayFormat), 'commaRoundTrip' in e && 'boolean' != typeof e.commaRoundTrip)) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
        var u = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || _.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : _.addQueryPrefix,
            allowDots: u,
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
            filter: c,
            format: r,
            formatter: i,
            serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : _.serializeDate,
            skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : _.skipNulls,
            sort: 'function' == typeof e.sort ? e.sort : null,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : _.strictNullHandling
        };
    };
e.exports = function (e, t) {
    var n,
        i,
        o = e,
        a = g(t);
    'function' == typeof a.filter ? (o = (i = a.filter)('', o)) : l(a.filter) && (n = i = a.filter);
    var c = [];
    if ('object' != typeof o || null === o) return '';
    var d = s[a.arrayFormat],
        f = 'comma' === d && a.commaRoundTrip;
    n || (n = Object.keys(o)), a.sort && n.sort(a.sort);
    for (var _ = r(), p = 0; p < n.length; ++p) {
        var h = n[p];
        (a.skipNulls && null === o[h]) || u(c, m(o[h], h, d, f, a.allowEmptyArrays, a.strictNullHandling, a.skipNulls, a.encodeDotInKeys, a.encode ? a.encoder : null, a.filter, a.sort, a.allowDots, a.serializeDate, a.format, a.formatter, a.encodeValuesOnly, a.charset, _));
    }
    var E = c.join(a.delimiter),
        b = !0 === a.addQueryPrefix ? '?' : '';
    return a.charsetSentinel && ('iso-8859-1' === a.charset ? (b += 'utf8=%26%2310003%3B&') : (b += 'utf8=%E2%9C%93&')), E.length > 0 ? b + E : '';
};
