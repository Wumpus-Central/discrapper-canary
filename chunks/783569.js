n.d(t, {
    R: () => m,
    T: () => p,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(108531),
    r = n(311907),
    s = n(397927),
    o = n(765671),
    c = n(475743),
    d = n(775602);
let u = l.createContext({
    springConfig: {},
    isExpanded: !1,
});

function m(e) {
    let t = l.useMemo(
        () => ({
            springConfig: e.springConfig,
            isExpanded: e.isExpanded,
        }),
        [e.springConfig, e.isExpanded],
    );
    return (0, a.jsx)(u.Provider, {
        value: t,
        children: e.children,
    });
}

function p(e) {
    var t;
    let { children: n } = e,
        { springConfig: m, isExpanded: p } = l.useContext(u),
        h = (0, r.bG)([d.A], () => d.A.useReducedMotion),
        { ref: f, height: x = null } = (0, o.Ay)(),
        b = null != (t = (0, c.A)(x)) ? t : null,
        [{ height: g }, v] = (0, s.zhh)(() => ({
            from: {
                height: 0,
            },
            config: m,
        }));
    return (
        l.useLayoutEffect(() => {
            null !== x &&
                v({
                    height: x,
                    immediate: !p || h || null === b,
                });
        }, [x, v, p, h, b]),
        (0, a.jsx)(i.animated.div, {
            style: {
                height: null === b ? "auto" : g,
                overflow: "hidden",
            },
            children: (0, a.jsx)("div", {
                style: {
                    overflow: "hidden",
                },
                ref: f,
                children: n,
            }),
        })
    );
}
