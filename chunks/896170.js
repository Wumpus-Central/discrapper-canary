"use strict";
r.d(t, { Ht: () => l });
var n = r(542113),
    o = r(404555),
    i = r.n(o),
    a = {
        CASE_SENSITIVE_EQUAL: 7,
        EQUAL: 6,
        STARTS_WITH: 5,
        WORD_STARTS_WITH: 4,
        CONTAINS: 3,
        ACRONYM: 2,
        MATCHES: 1,
        NO_MATCH: 0,
    };
l.rankings = a;
var s = function (e, t) {
    return String(e.rankedValue).localeCompare(String(t.rankedValue));
};
function l(e, t, r) {
    void 0 === r && (r = {});
    var o = r,
        i = o.keys,
        l = o.threshold,
        c = void 0 === l ? a.MATCHES : l,
        p = o.baseSort,
        d = void 0 === p ? s : p,
        h = o.sorter;
    return (
        void 0 === h
            ? function (e) {
                  return e.sort(function (e, t) {
                      var r, n, o, i, a, s, l;
                      return (
                          (r = e),
                          (n = t),
                          (o = d),
                          (i = r.rank),
                          (a = r.keyIndex),
                          (s = n.rank),
                          (l = n.keyIndex),
                          i !== s ? (i > s ? -1 : 1) : a === l ? o(r, n) : a < l ? -1 : 1
                      );
                  });
              }
            : h
    )(
        e.reduce(function (e, o, s) {
            var l,
                p,
                d,
                h,
                m =
                    ((l = o),
                    (p = i),
                    (d = t),
                    (h = r),
                    p
                        ? (function (e, t) {
                              for (var r = [], o = 0, i = t.length; o < i; o++) {
                                  for (
                                      var a,
                                          s = t[o],
                                          l = "string" == typeof (a = s) ? f : (0, n.A)({}, f, a),
                                          u = (function (e, t) {
                                              var r;
                                              if (("object" == typeof t && (t = t.key), "function" == typeof t))
                                                  r = t(e);
                                              else if (null == e) r = null;
                                              else if (Object.hasOwnProperty.call(e, t)) r = e[t];
                                              else {
                                                  if (t.includes("."))
                                                      return (function (e, t) {
                                                          for (
                                                              var r = e.split("."), n = [t], o = 0, i = r.length;
                                                              o < i;
                                                              o++
                                                          ) {
                                                              for (
                                                                  var a = r[o], s = [], l = 0, u = n.length;
                                                                  l < u;
                                                                  l++
                                                              ) {
                                                                  var c = n[l];
                                                                  if (null != c)
                                                                      if (Object.hasOwnProperty.call(c, a)) {
                                                                          var f = c[a];
                                                                          null != f && s.push(f);
                                                                      } else "*" === a && (s = s.concat(c));
                                                              }
                                                              n = s;
                                                          }
                                                          if (Array.isArray(n[0])) {
                                                              var p = [];
                                                              return p.concat.apply(p, n);
                                                          }
                                                          return n;
                                                      })(t, e);
                                                  r = null;
                                              }
                                              return null == r ? [] : Array.isArray(r) ? r : [String(r)];
                                          })(e, s),
                                          c = 0,
                                          p = u.length;
                                      c < p;
                                      c++
                                  )
                                      r.push({ itemValue: u[c], attributes: l });
                              }
                              return r;
                          })(l, p).reduce(
                              function (e, t, r) {
                                  var n = e.rank,
                                      o = e.rankedValue,
                                      i = e.keyIndex,
                                      s = e.keyThreshold,
                                      l = t.itemValue,
                                      c = t.attributes,
                                      f = u(l, d, h),
                                      p = o,
                                      m = c.minRanking,
                                      v = c.maxRanking,
                                      y = c.threshold;
                                  return (
                                      f < m && f >= a.MATCHES ? (f = m) : f > v && (f = v),
                                      f > n && ((n = f), (i = r), (s = y), (p = l)),
                                      { rankedValue: p, rank: n, keyIndex: i, keyThreshold: s }
                                  );
                              },
                              { rankedValue: l, rank: a.NO_MATCH, keyIndex: -1, keyThreshold: h.threshold },
                          )
                        : { rankedValue: l, rank: u(l, d, h), keyIndex: -1, keyThreshold: h.threshold }),
                v = m.rank,
                y = m.keyThreshold;
            return v >= (void 0 === y ? c : y) && e.push((0, n.A)({}, m, { item: o, index: s })), e;
        }, []),
    ).map(function (e) {
        return e.item;
    });
}
function u(e, t, r) {
    var n;
    return ((e = c(e, r)), (t = c(t, r)).length > e.length)
        ? a.NO_MATCH
        : e === t
          ? a.CASE_SENSITIVE_EQUAL
          : (e = e.toLowerCase()) === (t = t.toLowerCase())
            ? a.EQUAL
            : e.startsWith(t)
              ? a.STARTS_WITH
              : e.includes(" " + t)
                ? a.WORD_STARTS_WITH
                : e.includes(t)
                  ? a.CONTAINS
                  : 1 === t.length
                    ? a.NO_MATCH
                    : ((n = ""),
                        e.split(" ").forEach(function (e) {
                            e.split("-").forEach(function (e) {
                                n += e.substr(0, 1);
                            });
                        }),
                        n).includes(t)
                      ? a.ACRONYM
                      : (function (e, t) {
                            var r,
                                n,
                                o = 0,
                                i = 0;
                            function s(e, t, r) {
                                for (var n = r, i = t.length; n < i; n++) if (t[n] === e) return (o += 1), n + 1;
                                return -1;
                            }
                            var l = s(t[0], e, 0);
                            if (l < 0) return a.NO_MATCH;
                            i = l;
                            for (var u = 1, c = t.length; u < c; u++)
                                if (!((i = s(t[u], e, i)) > -1)) return a.NO_MATCH;
                            return (r = i - l), (n = o / t.length), a.MATCHES + (1 / r) * n;
                        })(e, t);
}
function c(e, t) {
    return (e = "" + e), t.keepDiacritics || (e = i()(e)), e;
}
var f = { maxRanking: 1 / 0, minRanking: -1 / 0 };
