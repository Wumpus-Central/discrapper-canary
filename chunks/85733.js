var i = r(478497),
    a = r(995769),
    s = r(606956),
    o = Object.prototype.hasOwnProperty,
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
    _ = s.default,
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
        format: _,
        formatter: s.formatters[_],
        indices: !1,
        serializeDate: function (e) {
            return f.call(e);
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    p = function (e) {
        return 'string' == typeof e || 'number' == typeof e || 'boolean' == typeof e || 'symbol' == typeof e || 'bigint' == typeof e;
    },
    m = {},
    g = function e(n, r, s, o, l, c, f, _, g, E, v, I, T, b, y, S, A, N) {
        for (var C, R = n, O = N, D = 0, L = !1; void 0 !== (O = O.get(m)) && !L; ) {
            var x = O.get(n);
            if (((D += 1), void 0 !== x)) {
                if (x === D) throw RangeError('Cyclic object value');
                L = !0;
            }
            void 0 === O.get(m) && (D = 0);
        }
        if (
            ('function' == typeof E
                ? (R = E(r, R))
                : R instanceof Date
                  ? (R = T(R))
                  : 'comma' === s &&
                    u(R) &&
                    (R = a.maybeMap(R, function (e) {
                        return e instanceof Date ? T(e) : e;
                    })),
            null === R)
        ) {
            if (c) return g && !S ? g(r, h.encoder, A, 'key', b) : r;
            R = '';
        }
        if (p(R) || a.isBuffer(R)) return g ? [y(S ? r : g(r, h.encoder, A, 'key', b)) + '=' + y(g(R, h.encoder, A, 'value', b))] : [y(r) + '=' + y(String(R))];
        var w = [];
        if (void 0 === R) return w;
        if ('comma' === s && u(R)) S && g && (R = a.maybeMap(R, g)), (C = [{ value: R.length > 0 ? R.join(',') || null : void 0 }]);
        else if (u(E)) C = E;
        else {
            var P = Object.keys(R);
            C = v ? P.sort(v) : P;
        }
        var M = _ ? r.replace(/\./g, '%2E') : r,
            k = o && u(R) && 1 === R.length ? M + '[]' : M;
        if (l && u(R) && 0 === R.length) return k + '[]';
        for (var U = 0; U < C.length; ++U) {
            var B = C[U],
                G = 'object' == typeof B && void 0 !== B.value ? B.value : R[B];
            if (!f || null !== G) {
                var Z = I && _ ? B.replace(/\./g, '%2E') : B,
                    F = u(R) ? ('function' == typeof s ? s(k, Z) : k) : k + (I ? '.' + Z : '[' + Z + ']');
                N.set(n, D);
                var V = i();
                V.set(m, N), d(w, e(G, F, s, o, l, c, f, _, 'comma' === s && S && u(R) ? null : g, E, v, I, T, b, y, S, A, V));
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
        var i = s.default;
        if (void 0 !== e.format) {
            if (!o.call(s.formatters, e.format)) throw TypeError('Unknown format option provided.');
            i = e.format;
        }
        var a = s.formatters[i],
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
        s = e,
        o = E(n);
    'function' == typeof o.filter ? (s = (a = o.filter)('', s)) : u(o.filter) && (r = a = o.filter);
    var c = [];
    if ('object' != typeof s || null === s) return '';
    var f = l[o.arrayFormat],
        _ = 'comma' === f && o.commaRoundTrip;
    !r && (r = Object.keys(s)), o.sort && r.sort(o.sort);
    for (var h = i(), p = 0; p < r.length; ++p) {
        var m = r[p];
        if (!o.skipNulls || null !== s[m]) d(c, g(s[m], m, f, _, o.allowEmptyArrays, o.strictNullHandling, o.skipNulls, o.encodeDotInKeys, o.encode ? o.encoder : null, o.filter, o.sort, o.allowDots, o.serializeDate, o.format, o.formatter, o.encodeValuesOnly, o.charset, h));
    }
    var v = c.join(o.delimiter),
        I = !0 === o.addQueryPrefix ? '?' : '';
    return o.charsetSentinel && ('iso-8859-1' === o.charset ? (I += 'utf8=%26%2310003%3B&') : (I += 'utf8=%E2%9C%93&')), v.length > 0 ? I + v : '';
};
