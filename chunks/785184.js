n.d(t, { Z: () => _ });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(607070),
    l = n(7093),
    c = n(40347),
    u = n(388032),
    d = n(92038);
let f = i.lazy(() => n.e("22274").then(n.bind(n, 269792)));
function _() {
    let e = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        t = (0, l.Z)((e) => e.shouldRenderTenureLevelUp),
        n = (0, c.Z)();
    return e || !t || null == n ? null : (0, r.jsx)(p, { levelUpData: n });
}
function p(e) {
    let { levelUpData: t } = e,
        n = i.useRef(null),
        a = i.useCallback(() => {
            l.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        i.useEffect(() => a, [a]),
        (0, r.jsx)(o.EqS, {
            containerRef: n,
            children: (0, r.jsxs)("div", {
                className: d.wrapper,
                children: [
                    (0, r.jsx)(o.M0o, {
                        className: d.closeButton,
                        tooltip: u.intl.string(u.t.cpT0Cg),
                        color: o.YX$.SECONDARY,
                        size: o.tT7.SIZE_24,
                        icon: (0, r.jsx)(o.Dio, {
                            size: "xs",
                            color: "currentColor",
                        }),
                        onClick: a,
                    }),
                    (0, r.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, r.jsx)(f, { levelUpData: t }),
                    }),
                ],
            }),
        })
    );
}
