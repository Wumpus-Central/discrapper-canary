n.d(t, { i: () => i }), n(47120);
var r = n(192379);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2000,
        [n, i] = (0, r.useState)(!!e),
        o = (0, r.useRef)(null);
    return (
        (0, r.useEffect)(
            () => (
                e
                    ? (i(!0), null !== o.current && (clearTimeout(o.current), (o.current = null)))
                    : n &&
                      (o.current = setTimeout(() => {
                          i(!1), (o.current = null);
                      }, t)),
                () => {
                    null !== o.current && clearTimeout(o.current);
                }
            ),
            [e, n, t]
        ),
        n
    );
}
