t.d(e, { nC: () => f }), t(388685), t(704826), t(35282), t(539854);
var n = t(392711),
    r = t.n(n),
    l = t(619864),
    i = t(193995);
let s = new Set([
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
function a(A) {
    return A.replace(/('|\u2019|\uFF07)(s|S)$/, "");
}
function o(A) {
    return A.toLowerCase();
}
function g(A) {
    return s.has(A);
}
function c(A) {
    return 0 === A.length;
}
function f(A) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        t = A.length >= l.zV && A.length <= l.y_ && e,
        n = new Set(r()(A.split(/\W+/)).map(a).reject(c).map(o).reject(g).map(i.a).value());
    return (A) =>
        (function A(e, t, n) {
            if (Array.isArray(e)) e.forEach((e) => A(e, t, n));
            else if ("list" === e.type) e.items.forEach((e) => A(e, t, n));
            else if ("string" == typeof e.content && "codeBlock" !== e.type) {
                let A = [],
                    r = "";
                e.content.split(/(\W+)/g).forEach((e) => {
                    !(function (A, e) {
                        let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (c((A = o(a(A)))) || g(A)) return !1;
                        let n = (0, i.a)(A);
                        if (t) {
                            for (let A of e.values()) if (n.includes(A)) return !0;
                            return !1;
                        }
                        return e.has(n);
                    })(e, t, n)
                        ? (r += e)
                        : (r.length > 0 &&
                              A.push({
                                  type: "text",
                                  content: r,
                              }),
                          A.push({
                              type: "highlight",
                              content: e,
                          }),
                          (r = ""));
                }),
                    A.length > 0 &&
                        (r.length > 0 &&
                            A.push({
                                type: "text",
                                content: r,
                            }),
                        "text" === e.type
                            ? (e.content = A)
                            : (e.content = [
                                  {
                                      type: "text",
                                      content: A,
                                  },
                              ]));
            } else null != e.content && A(e.content, t, n);
            return e;
        })(A, n, t);
}
