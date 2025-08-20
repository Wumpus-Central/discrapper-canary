n.d(t, { Z: () => f });
var r = n(951288),
    i = n(647438),
    a = n(481060),
    o = n(7093),
    s = n(101966),
    l = n(40347),
    c = n(388032),
    u = n(92038);
let d = i.lazy(() => n.e("22274").then(n.bind(n, 269792)));
function f() {
    let e = (0, s.Z)({ location: "TenureLevelUpAnimationLazyWrapper" }),
        t = (0, o.Z)((e) => e.shouldRenderTenureLevelUp),
        n = (0, l.Z)();
    return e && t && null != n ? (0, r.jsx)(_, { levelUpData: n }) : null;
}
function _(e) {
    let { levelUpData: t } = e,
        n = i.useRef(null),
        s = i.useCallback(() => {
            o.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        i.useEffect(() => s, [s]),
        (0, r.jsx)(a.EqS, {
            containerRef: n,
            children: (0, r.jsxs)("div", {
                className: u.wrapper,
                children: [
                    (0, r.jsx)(a.M0o, {
                        className: u.closeButton,
                        tooltip: c.intl.string(c.t.cpT0Cg),
                        color: a.YX$.SECONDARY,
                        size: a.tT7.SIZE_24,
                        icon: (0, r.jsx)(a.Dio, {
                            size: "xs",
                            color: "currentColor",
                        }),
                        onClick: s,
                    }),
                    (0, r.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, r.jsx)(d, { levelUpData: t }),
                    }),
                ],
            }),
        })
    );
}
