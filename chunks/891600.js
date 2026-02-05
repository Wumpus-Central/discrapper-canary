"use strict";
n.d(t, { A: () => o });
var r = n(791332),
    i = n.n(r),
    a = n(919535);
function s(e, t, n, r, i) {
    let s;
    n || (t += "\n\n"), (s = e(t, { inline: n, ...r })), (s = (0, a.rI)(r, s));
    let o = (0, a.Ae)(s),
        l = o.hasBailedAst;
    return (s = o.ast), null != i && (s = i(s, n, l)), s;
}
let o = {
    reactParserFor(e) {
        let t = i().parserFor(e),
            n = i().reactFor(i().ruleOutput(e, "react"));
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return n(s(t, e, r, i, a), i);
        };
    },
    astParserFor(e) {
        let t = i().parserFor(e);
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return s(t, e, n, r, i);
        };
    },
};
