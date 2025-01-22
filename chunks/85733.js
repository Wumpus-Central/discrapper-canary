var i = r(478497),
    a = r(995769),
    o = r(606956),
    s = Object.prototype.hasOwnProperty,
    l = {
        brackets: function (e) {
            return e + '[]';
        },
        comma: 'comma',
        indices: function (e, n) {
            return e + '[' + n + ']';
        },
        repeat: function (e) {
            return e;
        }
    },
    u = Array.isArray,
    c = Array.prototype.push,
    d = function (e, n) {
        c.apply(e, u(n) ? n : [n]);
    },
    f = Date.prototype.toISOString,
    p = o.default,
    h = {
        addQueryPrefix: !1,
        allowDots: !1,
        allowEmptyArrays: !1,
        arrayFormat: 'indices',
        charset: 'utf-8',
        charsetSentinel: !1,
        delimiter: '&',
        encode: !0,
        encodeDotInKeys: !1,
        encoder: a.encode,
        encodeValuesOnly: !1,
        format: p,
        formatter: o.formatters[p],
        indices: !1,
        serializeDate: function (e) {
            return f.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    _ = function (e) {
        return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e || 'symbol' == typeof e || 'bigint' == typeof e;
    },
    m = {},
    g = function e(n, r, o, s, l, c, f, p, g, E, v, y, b, I, T, S, A, C) {
        for (var N, R = n, O = C, D = 0, x = !1; void 0 !== (O = O.get(m)) && !x; ) {
            var L = O.get(n);
            if (((D += 1), void 0 !== L)) {
                if (L === D) throw RangeError('Cyclic object value');
                x = !0;
            }
            void 0 === O.get(m) && (D = 0);
        }
        if (
            ('function' == typeof E
                ? (R = E(r, R))
                : R instanceof Date
                  ? (R = b(R))
                  : 'comma' === o &&
                    u(R) &&
                    (R = a.maybeMap(R, function (e) {
                        return e instanceof Date ? b(e) : e;
                    })),
            null === R)
        ) {
            if (c) return g && !S ? g(r, h.encoder, A, 'key', I) : r;
            R = '';
        }
        if (_(R) || a.isBuffer(R)) return g ? [T(S ? r : g(r, h.encoder, A, 'key', I)) + '=' + T(g(R, h.encoder, A, 'value', I))] : [T(r) + '=' + T(String(R))];
        var w = [];
        if (void 0 === R) return w;
        if ('comma' === o && u(R)) S && g && (R = a.maybeMap(R, g)), (N = [{ value: R.length > 0 ? R.join(',') || null : void 0 }]);
        else if (u(E)) N = E;
        else {
            var P = Object.keys(R);
            N = v ? P.sort(v) : P;
        }
        var M = p ? r.replace(/\./g, '%2E') : r,
            k = s && u(R) && 1 === R.length ? M + '[]' : M;
        if (l && u(R) && 0 === R.length) return k + '[]';
        for (var U = 0; U < N.length; ++U) {
            var B = N[U],
                G = 'object' == typeof B && void 0 !== B.value ? B.value : R[B];
            if (!f || null !== G) {
                var Z = y && p ? B.replace(/\./g, '%2E') : B,
                    F = u(R) ? ('function' == typeof o ? o(k, Z) : k) : k + (y ? '.' + Z : '[' + Z + ']');
                C.set(n, D);
                var V = i();
                V.set(m, C), d(w, e(G, F, o, s, l, c, f, p, 'comma' === o && S && u(R) ? null : g, E, v, y, b, I, T, S, A, V));
            }
        }
        return w;
    },
    E = function (e) {
        if (!e) return h;
        if (void 0 !== e.allowEmptyArrays && 'boolean' != typeof e.allowEmptyArrays) throw TypeError('`allowEmptyArrays` option can only be `true` or `false`, when provided');
        if (void 0 !== e.encodeDotInKeys && 'boolean' != typeof e.encodeDotInKeys) throw TypeError('`encodeDotInKeys` option can only be `true` or `false`, when provided');
        if (null !== e.encoder && void 0 !== e.encoder && 'function' != typeof e.encoder) throw TypeError('Encoder has to be a function.');
        var n,
            r = e.charset || h.charset;
        if (void 0 !== e.charset && 'utf-8' !== e.charset && 'iso-8859-1' !== e.charset) throw TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
        var i = o.default;
        if (void 0 !== e.format) {
            if (!s.call(o.formatters, e.format)) throw TypeError('Unknown format option provided.');
            i = e.format;
        }
        var a = o.formatters[i],
            c = h.filter;
        if ((('function' == typeof e.filter || u(e.filter)) && (c = e.filter), (n = e.arrayFormat in l ? e.arrayFormat : 'indices' in e ? (e.indices ? 'indices' : 'repeat') : h.arrayFormat), 'commaRoundTrip' in e && 'boolean' != typeof e.commaRoundTrip)) throw TypeError('`commaRoundTrip` must be a boolean, or absent');
        var d = void 0 === e.allowDots ? !0 === e.encodeDotInKeys || h.allowDots : !!e.allowDots;
        return {
            addQueryPrefix: 'boolean' == typeof e.addQueryPrefix ? e.addQueryPrefix : h.addQueryPrefix,
            allowDots: d,
            allowEmptyArrays: 'boolean' == typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : h.allowEmptyArrays,
            arrayFormat: n,
            charset: r,
            charsetSentinel: 'boolean' == typeof e.charsetSentinel ? e.charsetSentinel : h.charsetSentinel,
            commaRoundTrip: e.commaRoundTrip,
            delimiter: void 0 === e.delimiter ? h.delimiter : e.delimiter,
            encode: 'boolean' == typeof e.encode ? e.encode : h.encode,
            encodeDotInKeys: 'boolean' == typeof e.encodeDotInKeys ? e.encodeDotInKeys : h.encodeDotInKeys,
            encoder: 'function' == typeof e.encoder ? e.encoder : h.encoder,
            encodeValuesOnly: 'boolean' == typeof e.encodeValuesOnly ? e.encodeValuesOnly : h.encodeValuesOnly,
            filter: c,
            format: i,
            formatter: a,
            serializeDate: 'function' == typeof e.serializeDate ? e.serializeDate : h.serializeDate,
            skipNulls: 'boolean' == typeof e.skipNulls ? e.skipNulls : h.skipNulls,
            sort: 'function' == typeof e.sort ? e.sort : null,
            strictNullHandling: 'boolean' == typeof e.strictNullHandling ? e.strictNullHandling : h.strictNullHandling
        };
    };
e.exports = function (e, n) {
    var r,
        a,
        o = e,
        s = E(n);
    'function' == typeof s.filter ? (o = (a = s.filter)('', o)) : u(s.filter) && (r = a = s.filter);
    var c = [];
    if ('object' != typeof o || null === o) return '';
    var f = l[s.arrayFormat],
        p = 'comma' === f && s.commaRoundTrip;
    !r && (r = Object.keys(o)), s.sort && r.sort(s.sort);
    for (var h = i(), _ = 0; _ < r.length; ++_) {
        var m = r[_];
        if (!s.skipNulls || null !== o[m]) d(c, g(o[m], m, f, p, s.allowEmptyArrays, s.strictNullHandling, s.skipNulls, s.encodeDotInKeys, s.encode ? s.encoder : null, s.filter, s.sort, s.allowDots, s.serializeDate, s.format, s.formatter, s.encodeValuesOnly, s.charset, h));
    }
    var v = c.join(s.delimiter),
        y = !0 === s.addQueryPrefix ? '?' : '';
    return s.charsetSentinel && ('iso-8859-1' === s.charset ? (y += 'utf8=%26%2310003%3B&') : (y += 'utf8=%E2%9C%93&')), v.length > 0 ? y + v : '';
};
