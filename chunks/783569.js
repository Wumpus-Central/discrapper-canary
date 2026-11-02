n.d(t, { R: () => p, T: () => m });
var l = n(477900),
    s = n(582128),
    a = n(941143),
    r = n(17928),
    i = n(717421),
    o = n(765671),
    u = n(475743),
    c = n(775602);
let d = s.createContext({ springConfig: {}, isExpanded: !1 });
function p(e) {
    let t = s.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, l.jsx)(d.Provider, { value: t, children: e.children });
}
function m(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: p } = s.useContext(d),
        m = (0, r.bG)([c.Ay], () => c.Ay.useReducedMotion),
        { ref: x, height: f = null } = (0, o.Ay)(),
        h = (0, u.Ay)(f) ?? null,
        [{ height: C }, v] = (0, i.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        s.useLayoutEffect(() => {
            null !== f && v({ height: f, immediate: !p || m || null === h });
        }, [f, v, p, m, h]),
        (0, l.jsx)(a.animated.div, {
            style: { height: null === h ? "auto" : C, overflow: "hidden" },
            children: (0, l.jsx)("div", { style: { overflow: "hidden" }, ref: x, children: t }),
        })
    );
}
