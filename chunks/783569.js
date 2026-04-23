n.d(t, { R: () => p, T: () => h });
var i = n(627968),
    s = n(64700),
    l = n(419354),
    a = n(311907),
    r = n(717421),
    o = n(765671),
    d = n(475743),
    c = n(775602);
let u = s.createContext({ springConfig: {}, isExpanded: !1 });
function p(e) {
    let t = s.useMemo(
        () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
        [e.springConfig, e.isExpanded],
    );
    return (0, i.jsx)(u.Provider, { value: t, children: e.children });
}
function h(e) {
    let { children: t } = e,
        { springConfig: n, isExpanded: p } = s.useContext(u),
        h = (0, a.bG)([c.A], () => c.A.useReducedMotion),
        { ref: m, height: _ = null } = (0, o.Ay)(),
        A = (0, d.A)(_) ?? null,
        [{ height: f }, g] = (0, r.z)(() => ({ from: { height: 0 }, config: n }));
    return (
        s.useLayoutEffect(() => {
            null !== _ && g({ height: _, immediate: !p || h || null === A });
        }, [_, g, p, h, A]),
        (0, i.jsx)(l.animated.div, {
            style: { height: null === A ? "auto" : f, overflow: "hidden" },
            children: (0, i.jsx)("div", { style: { overflow: "hidden" }, ref: m, children: t }),
        })
    );
}
