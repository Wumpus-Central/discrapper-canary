r.d(t, { L: () => a });
var n = r(834559),
    i = r(811390),
    o = r(582128);
function a() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = (0, n.Bi)(),
        [r, a] = (function () {
            let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                [t, r] = (0, o.useState)(e),
                n = (0, o.useRef)(!1),
                a = (0, o.useCallback)((e) => {
                    ((n.current = !0), r(!!e));
                }, []);
            return (
                (0, i.N)(() => {
                    n.current || r(!1);
                }, []),
                [a, t]
            );
        })(e);
    return { id: a ? t : void 0, ref: r };
}
