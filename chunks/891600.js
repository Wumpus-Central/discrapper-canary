n.d(t, { A: () => c });
var r = n(280230),
    i = n.n(r),
    a = n(919535);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t, n, r, i) {
    let s;
    return (
        n || (t += "\n\n"),
        (s = e(t, o({ inline: n }, r))),
        (s = (0, a.rI)(r, s)),
        (s = (0, a.Ae)(s)),
        null != i && (s = i(s, n)),
        s
    );
}
let c = {
    reactParserFor(e) {
        let t = i().parserFor(e),
            n = i().reactFor(i().ruleOutput(e, "react"));
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return n(l(t, e, r, i, a), i);
        };
    },
    astParserFor(e) {
        let t = i().parserFor(e);
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return l(t, e, n, r, i);
        };
    },
};
