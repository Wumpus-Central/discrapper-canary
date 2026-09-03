n.d(t, { A: () => l });
var i = n(478676),
    r = n.n(i),
    a = n(919535);
function s(e, t, n, i, r) {
    let s;
    n || (t += "\n\n"), (s = e(t, { inline: n, ...i })), (s = (0, a.rI)(i, s));
    let l = (0, a.Ae)(s),
        o = l.hasBailedAst;
    return (s = l.ast), null != r && (s = r(s, n, o)), s;
}
let l = {
    reactParserFor(e) {
        let t = r().parserFor(e),
            n = r().reactFor(r().ruleOutput(e, "react"));
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return n(s(t, e, i, r, a), r);
        };
    },
    astParserFor(e) {
        let t = r().parserFor(e);
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return s(t, e, n, i, r);
        };
    },
};
