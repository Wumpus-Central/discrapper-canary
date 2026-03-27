n.d(t, { R: () => m, T: () => h });
var a = n(627968),
    i = n(64700),
    s = n(382222),
    l = n(311907),
    r = n(397927),
    o = n(765671),
    d = n(475743),
    c = n(775602);
let u = i.createContext({ springConfig: {}, isExpanded: !1 });
function m(e) {
    let t = i.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, a.jsx)(u.Provider, { value: t, children: e.children });
}
function h(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: m } = i.useContext(u),
        h = (0, l.bG)([c.A], () => c.A.useReducedMotion),
        { ref: x, height: p = null } = (0, o.Ay)(),
        g = (0, d.A)(p) ?? null,
        [{ height: _ }, f] = (0, r.zhh)(() => ({ from: { height: 0 }, config: n }));
    return (
        i.useLayoutEffect(() => {
            null !== p && f({ height: p, immediate: !m || h || null === g });
        }, [p, f, m, h, g]),
        (0, a.jsx)(s.animated.div, {
            style: { height: null === g ? "auto" : _, overflow: "hidden" },
            children: (0, a.jsx)("div", { style: { overflow: "hidden" }, ref: x, children: t }),
        })
    );
}
