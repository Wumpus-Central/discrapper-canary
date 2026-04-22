"use strict";
n.d(t, { Ht: () => l });
var r = n(542113),
    i = n(404555),
    s = n.n(i),
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
var o = function (e, t) {
    return String(e.rankedValue).localeCompare(String(t.rankedValue));
};
function l(e, t, n) {
    void 0 === n && (n = {});
    var i = n,
        s = i.keys,
        l = i.threshold,
        d = void 0 === l ? a.MATCHES : l,
        _ = i.baseSort,
        f = void 0 === _ ? o : _,
        E = i.sorter;
    return (
        void 0 === E
            ? function (e) {
                  return e.sort(function (e, t) {
                      var n, r, i, s, a, o, l;
                      return (
                          (n = e),
                          (r = t),
                          (i = f),
                          (s = n.rank),
                          (a = n.keyIndex),
                          (o = r.rank),
                          (l = r.keyIndex),
                          s !== o ? (s > o ? -1 : 1) : a === l ? i(n, r) : a < l ? -1 : 1
                      );
                  });
              }
            : E
    )(
        e.reduce(function (e, i, o) {
            var l,
                _,
                f,
                E,
                h =
                    ((l = i),
                    (_ = s),
                    (f = t),
                    (E = n),
                    _
                        ? (function (e, t) {
                              for (var n = [], i = 0, s = t.length; i < s; i++) {
                                  for (
                                      var a,
                                          o = t[i],
                                          l = "string" == typeof (a = o) ? c : (0, r.A)({}, c, a),
                                          u = (function (e, t) {
                                              var n;
                                              if (("object" == typeof t && (t = t.key), "function" == typeof t))
                                                  n = t(e);
                                              else if (null == e) n = null;
                                              else if (Object.hasOwnProperty.call(e, t)) n = e[t];
                                              else {
                                                  if (t.includes("."))
                                                      return (function (e, t) {
                                                          for (
                                                              var n = e.split("."), r = [t], i = 0, s = n.length;
                                                              i < s;
                                                              i++
                                                          ) {
                                                              for (
                                                                  var a = n[i], o = [], l = 0, u = r.length;
                                                                  l < u;
                                                                  l++
                                                              ) {
                                                                  var d = r[l];
                                                                  if (null != d)
                                                                      if (Object.hasOwnProperty.call(d, a)) {
                                                                          var c = d[a];
                                                                          null != c && o.push(c);
                                                                      } else "*" === a && (o = o.concat(d));
                                                              }
                                                              r = o;
                                                          }
                                                          if (Array.isArray(r[0])) {
                                                              var _ = [];
                                                              return _.concat.apply(_, r);
                                                          }
                                                          return r;
                                                      })(t, e);
                                                  n = null;
                                              }
                                              return null == n ? [] : Array.isArray(n) ? n : [String(n)];
                                          })(e, o),
                                          d = 0,
                                          _ = u.length;
                                      d < _;
                                      d++
                                  )
                                      n.push({ itemValue: u[d], attributes: l });
                              }
                              return n;
                          })(l, _).reduce(
                              function (e, t, n) {
                                  var r = e.rank,
                                      i = e.rankedValue,
                                      s = e.keyIndex,
                                      o = e.keyThreshold,
                                      l = t.itemValue,
                                      d = t.attributes,
                                      c = u(l, f, E),
                                      _ = i,
                                      h = d.minRanking,
                                      p = d.maxRanking,
                                      m = d.threshold;
                                  return (
                                      c < h && c >= a.MATCHES ? (c = h) : c > p && (c = p),
                                      c > r && ((r = c), (s = n), (o = m), (_ = l)),
                                      { rankedValue: _, rank: r, keyIndex: s, keyThreshold: o }
                                  );
                              },
                              { rankedValue: l, rank: a.NO_MATCH, keyIndex: -1, keyThreshold: E.threshold },
                          )
                        : { rankedValue: l, rank: u(l, f, E), keyIndex: -1, keyThreshold: E.threshold }),
                p = h.rank,
                m = h.keyThreshold;
            return p >= (void 0 === m ? d : m) && e.push((0, r.A)({}, h, { item: i, index: o })), e;
        }, []),
    ).map(function (e) {
        return e.item;
    });
}
function u(e, t, n) {
    var r;
    return ((e = d(e, n)), (t = d(t, n)).length > e.length)
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
                    : ((r = ""),
                        e.split(" ").forEach(function (e) {
                            e.split("-").forEach(function (e) {
                                r += e.substr(0, 1);
                            });
                        }),
                        r).includes(t)
                      ? a.ACRONYM
                      : (function (e, t) {
                            var n,
                                r,
                                i = 0,
                                s = 0;
                            function o(e, t, n) {
                                for (var r = n, s = t.length; r < s; r++) if (t[r] === e) return (i += 1), r + 1;
                                return -1;
                            }
                            var l = o(t[0], e, 0);
                            if (l < 0) return a.NO_MATCH;
                            s = l;
                            for (var u = 1, d = t.length; u < d; u++)
                                if (!((s = o(t[u], e, s)) > -1)) return a.NO_MATCH;
                            return (n = s - l), (r = i / t.length), a.MATCHES + (1 / n) * r;
                        })(e, t);
}
function d(e, t) {
    return (e = "" + e), t.keepDiacritics || (e = s()(e)), e;
}
var c = { maxRanking: 1 / 0, minRanking: -1 / 0 };
