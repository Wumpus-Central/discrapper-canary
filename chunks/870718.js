u.r(e), u.d(e, { default: () => c });
var t = u(200651),
    n = u(192379),
    s = u(160651);
function c(r) {
    let { code: e } = r,
        u = n.useRef(null);
    return (
        n.useEffect(() => {
            null != u.current &&
                (0, s.sY)(e, u.current, {
                    throwOnError: !1,
                    displayMode: !0,
                    maxSize: 1
                });
        }, [e]),
        (0, t.jsx)('div', { ref: u })
    );
}
u(832682);
