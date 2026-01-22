n.d(t, {
    Ht: () => l,
});
var r = n(1139),
    i = n(404555),
    a = n.n(i),
    s = {
        CASE_SENSITIVE_EQUAL: 7,
        EQUAL: 6,
        STARTS_WITH: 5,
        WORD_STARTS_WITH: 4,
        CONTAINS: 3,
        ACRONYM: 2,
        MATCHES: 1,
        NO_MATCH: 0,
    };
l.rankings = s;
var o = function (e, t) {
    return String(e.rankedValue).localeCompare(String(t.rankedValue));
};

function l(e, t, n) {
    void 0 === n && (n = {});
    var i = n,
        a = i.keys,
        l = i.threshold,
        u = void 0 === l ? s.MATCHES : l,
        d = i.baseSort,
        f = void 0 === d ? o : d,
        _ = i.sorter;
    return (
        void 0 === _
            ? function (e) {
                  return e.sort(function (e, t) {
                      return p(e, t, f);
                  });
              }
            : _
    )(e.reduce(h, [])).map(function (e) {
        return e.item;
    });

    function h(e, i, s) {
        var o = c(i, a, t, n),
            l = o.rank,
            d = o.keyThreshold;
        return (
            l >= (void 0 === d ? u : d) &&
                e.push(
                    (0, r.A)({}, o, {
                        item: i,
                        index: s,
                    }),
                ),
            e
        );
    }
}

function c(e, t, n, r) {
    if (!t) {
        var i = e;
        return {
            rankedValue: i,
            rank: u(i, n, r),
            keyIndex: -1,
            keyThreshold: r.threshold,
        };
    }
    return g(e, t).reduce(
        function (e, t, i) {
            var a = e.rank,
                o = e.rankedValue,
                l = e.keyIndex,
                c = e.keyThreshold,
                d = t.itemValue,
                f = t.attributes,
                p = u(d, n, r),
                _ = o,
                h = f.minRanking,
                m = f.maxRanking,
                g = f.threshold;
            return (
                p < h && p >= s.MATCHES ? (p = h) : p > m && (p = m),
                p > a && ((a = p), (l = i), (c = g), (_ = d)),
                {
                    rankedValue: _,
                    rank: a,
                    keyIndex: l,
                    keyThreshold: c,
                }
            );
        },
        {
            rankedValue: e,
            rank: s.NO_MATCH,
            keyIndex: -1,
            keyThreshold: r.threshold,
        },
    );
}

function u(e, t, n) {
    return ((e = _(e, n)), (t = _(t, n)).length > e.length)
        ? s.NO_MATCH
        : e === t
          ? s.CASE_SENSITIVE_EQUAL
          : (e = e.toLowerCase()) === (t = t.toLowerCase())
            ? s.EQUAL
            : e.startsWith(t)
              ? s.STARTS_WITH
              : e.includes(" " + t)
                ? s.WORD_STARTS_WITH
                : e.includes(t)
                  ? s.CONTAINS
                  : 1 === t.length
                    ? s.NO_MATCH
                    : d(e).includes(t)
                      ? s.ACRONYM
                      : f(e, t);
}

function d(e) {
    var t = "";
    return (
        e.split(" ").forEach(function (e) {
            e.split("-").forEach(function (e) {
                t += e.substr(0, 1);
            });
        }),
        t
    );
}

function f(e, t) {
    var n = 0,
        r = 0;

    function i(e, t, r) {
        for (var i = r, a = t.length; i < a; i++) if (t[i] === e) return (n += 1), i + 1;
        return -1;
    }

    function a(e) {
        var r = 1 / e,
            i = n / t.length;
        return s.MATCHES + i * r;
    }
    var o = i(t[0], e, 0);
    if (o < 0) return s.NO_MATCH;
    r = o;
    for (var l = 1, c = t.length; l < c; l++) if (!((r = i(t[l], e, r)) > -1)) return s.NO_MATCH;
    return a(r - o);
}

function p(e, t, n) {
    var r = -1,
        i = 1,
        a = e.rank,
        s = e.keyIndex,
        o = t.rank,
        l = t.keyIndex;
    return a !== o ? (a > o ? r : i) : s === l ? n(e, t) : s < l ? r : i;
}

function _(e, t) {
    return (e = "" + e), t.keepDiacritics || (e = a()(e)), e;
}

function h(e, t) {
    var n;
    if (("object" == typeof t && (t = t.key), "function" == typeof t)) n = t(e);
    else if (null == e) n = null;
    else if (Object.hasOwnProperty.call(e, t)) n = e[t];
    else {
        if (t.includes(".")) return m(t, e);
        n = null;
    }
    return null == n ? [] : Array.isArray(n) ? n : [String(n)];
}

function m(e, t) {
    for (var n = e.split("."), r = [t], i = 0, a = n.length; i < a; i++) {
        for (var s = n[i], o = [], l = 0, c = r.length; l < c; l++) {
            var u = r[l];
            if (null != u)
                if (Object.hasOwnProperty.call(u, s)) {
                    var d = u[s];
                    null != d && o.push(d);
                } else "*" === s && (o = o.concat(u));
        }
        r = o;
    }
    if (Array.isArray(r[0])) {
        var f = [];
        return f.concat.apply(f, r);
    }
    return r;
}

function g(e, t) {
    for (var n = [], r = 0, i = t.length; r < i; r++)
        for (var a = t[r], s = b(a), o = h(e, a), l = 0, c = o.length; l < c; l++)
            n.push({
                itemValue: o[l],
                attributes: s,
            });
    return n;
}
var E = {
    maxRanking: 1 / 0,
    minRanking: -1 / 0,
};

function b(e) {
    return "string" == typeof e ? E : (0, r.A)({}, E, e);
}
