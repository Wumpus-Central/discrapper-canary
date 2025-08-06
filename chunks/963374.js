n.d(t, { nC: () => d }), n(388685), n(704826), n(35282), n(539854);
var r = n(392711),
    l = n.n(r),
    s = n(697741),
    i = n(193995);
let a = new Set([
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
function o(e) {
    return e.replace(/('|\u2019|\uFF07)(s|S)$/, "");
}
function u(e) {
    return e.toLowerCase();
}
function c(e) {
    return a.has(e);
}
function E(e) {
    return 0 === e.length;
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = new Set(
            (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.$;
                return l()(e.split(/\W+/)).map(o).reject(E).map(u).reject(c).map(t).value();
            })(e, t ? i.a : s.$),
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
                        if (E((e = u(o(e)))) || c(e)) return !1;
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
        })(e, n, t);
}
