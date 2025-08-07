n.d(t, { nC: () => _ }), n(388685), n(704826), n(35282), n(539854);
var r = n(392711),
    l = n.n(r),
    s = n(697741),
    i = n(619864),
    a = n(193995);
let o = new Set([
    "a",
    "an",
    "and",
    "are",
    "as",
    "at",
    "be",
    "but",
    "by",
    "for",
    "if",
    "in",
    "into",
    "is",
    "it",
    "no",
    "not",
    "of",
    "on",
    "or",
    "such",
    "that",
    "the",
    "their",
    "then",
    "there",
    "these",
    "they",
    "this",
    "to",
    "was",
    "will",
    "with",
]);
function u(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, "");
}
function c(e) {
    return e.toLowerCase();
}
function E(e) {
    return o.has(e);
}
function d(e) {
    return 0 === e.length;
}
function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = e.length >= i.zV && e.length <= i.y_ && t,
        r = new Set(
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.$;
                return l()(e.split(/\W+/)).map(u).reject(d).map(c).reject(E).map(t).value();
            })(e, n ? a.a : s.$),
        );
    return (e) =>
        (function e(t, n, r) {
            if (Array.isArray(t)) t.forEach((t) => e(t, n, r));
            else if ("string" == typeof t.content && "codeBlock" !== t.type) {
                let e = [],
                    l = "";
                t.content.split(/(\W+)/g).forEach((t) => {
                    !(function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (d((e = c(u(e)))) || E(e)) return !1;
                        if (n) {
                            for (let n of t.values()) if (e.includes(n)) return !0;
                            return !1;
                        }
                        return t.has((0, s.$)(e));
                    })(t, n, r)
                        ? (l += t)
                        : (l.length > 0 &&
                              e.push({
                                  type: "text",
                                  content: l,
                              }),
                          e.push({
                              type: "highlight",
                              content: t,
                          }),
                          (l = ""));
                }),
                    e.length > 0 &&
                        (l.length > 0 &&
                            e.push({
                                type: "text",
                                content: l,
                            }),
                        "text" === t.type
                            ? (t.content = e)
                            : (t.content = [
                                  {
                                      type: "text",
                                      content: e,
                                  },
                              ]));
            } else null != t.content && e(t.content, n, r);
            return t;
        })(e, r, n);
}
