n.d(t, { Z: () => p });
var a = n(951288),
    r = n(647438),
    i = n(442837),
    l = n(481060),
    s = n(607070),
    o = n(7093),
    c = n(40347),
    d = n(388032),
    u = n(92038);
let m = r.lazy(() => n.e("22274").then(n.bind(n, 269792)));
function p() {
    let e = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        t = (0, o.Z)((e) => e.shouldRenderTenureLevelUp),
        n = (0, c.Z)();
    return e || !t || null == n ? null : (0, a.jsx)(h, { levelUpData: n });
}
function h(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        i = r.useCallback(() => {
            o.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        r.useEffect(() => i, [i]),
        (0, a.jsx)(l.EqS, {
            containerRef: n,
            children: (0, a.jsxs)("div", {
                className: u.wrapper,
                children: [
                    (0, a.jsx)(l.M0o, {
                        className: u.closeButton,
                        tooltip: d.intl.string(d.t.cpT0Cg),
                        color: l.YX$.SECONDARY,
                        size: l.tT7.SIZE_24,
                        icon: (0, a.jsx)(l.Dio, {
                            size: "xs",
                            color: "currentColor",
                        }),
                        onClick: i,
                    }),
                    (0, a.jsx)(r.Suspense, {
                        fallback: null,
                        children: (0, a.jsx)(m, { levelUpData: t }),
                    }),
                ],
            }),
        })
    );
}
