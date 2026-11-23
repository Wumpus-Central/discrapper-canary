var l = n(477900),
    s = n(582128),
    a = n(156150),
    i = n(855986),
    r = n(717421),
    o = n(765671),
    u = n(475743),
    c = n(775602);
let d = s.createContext({ springConfig: {}, isExpanded: !1 });
n.d(
    t,
    {},
    {
        R: function (e) {
            let t = s.useMemo(
                () => ({ springConfig: e.springConfig, isExpanded: e.isExpanded }),
                [e.springConfig, e.isExpanded],
            );
            return (0, l.jsx)(d.Provider, { value: t, children: e.children });
        },
        T: function (e) {
            let { children: t } = e,
                { springConfig: n, isExpanded: p } = s.useContext(d),
                m = (0, i.bG)([c.Ay], () => c.Ay.useReducedMotion),
                { ref: x, height: f = null } = (0, o.Ay)(),
                h = (0, u.Ay)(f) ?? null,
                [{ height: C }, v] = (0, r.z)(() => ({ from: { height: 0 }, config: n }));
            return (
                s.useLayoutEffect(() => {
                    null !== f && v({ height: f, immediate: !p || m || null === h });
                }, [f, v, p, m, h]),
                (0, l.jsx)(a.animated.div, {
                    style: { height: null === h ? "auto" : C, overflow: "hidden" },
                    children: (0, l.jsx)("div", { style: { overflow: "hidden" }, ref: x, children: t }),
                })
            );
        },
    },
);
