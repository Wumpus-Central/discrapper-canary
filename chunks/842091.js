n.d(t, { Z: () => c });
var r = n(477660),
    i = n.n(r),
    o = n(840498);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t, n, r, i) {
    let a;
    return n || (t += '\n\n'), (a = e(t, s({ inline: n }, r))), (a = (0, o.ge)(r, a)), (a = (0, o.RA)(a)), null != i && (a = i(a, n)), a;
}
let c = {
    reactParserFor(e) {
        let t = i().parserFor(e),
            n = i().reactFor(i().ruleOutput(e, 'react'));
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return n(l(t, e, r, i, o), i);
        };
    },
    astParserFor(e) {
        let t = i().parserFor(e);
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return l(t, e, n, r, i);
        };
    }
};
