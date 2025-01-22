var i = r(477660),
    a = r.n(i),
    o = r(840498);
function s(e, n, r, i, a) {
    let s;
    return (
        !r && (n += '\n\n'),
        (s = e(n, {
            inline: r,
            ...i
        })),
        (s = (0, o.ge)(s)),
        (s = (0, o.RA)(s)),
        null != a && (s = a(s, r)),
        s
    );
}
n.Z = {
    reactParserFor(e) {
        let n = a().parserFor(e),
            r = a().reactFor(a().ruleOutput(e, 'react'));
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return r(s(n, e, i, a, o), a);
        };
    },
    astParserFor(e) {
        let n = a().parserFor(e);
        return function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return s(n, e, r, i, a);
        };
    }
};
