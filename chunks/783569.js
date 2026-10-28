n.d(t, { R: () => m, T: () => p });
var l = n(477900),
    r = n(582128),
    s = n(399513),
    a = n(17928),
    i = n(717421),
    o = n(765671),
    u = n(475743),
    c = n(775602);
let d = r.createContext({ springConfig: {}, isExpanded: !1 });
function m(e) {
    let t = r.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, l.jsx)(d.Provider, { value: t, children: e.children });
}
function p(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: m } = r.useContext(d),
        p = (0, a.bG)([c.Ay], () => c.Ay.useReducedMotion),
        { ref: x, height: h = null } = (0, o.Ay)(),
        f = (0, u.Ay)(h) ?? null,
        [{ height: C }, v] = (0, i.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        r.useLayoutEffect(() => {
            null !== h && v({ height: h, immediate: !m || p || null === f });
        }, [h, v, m, p, f]),
        (0, l.jsx)(s.animated.div, {
            style: { height: null === f ? "auto" : C, overflow: "hidden" },
            children: (0, l.jsx)("div", { style: { overflow: "hidden" }, ref: x, children: t }),
        })
    );
}
