n.d(t, { Z: () => m });
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(7093),
    a = n(101966),
    o = n(40347),
    c = n(388032),
    d = n(757020);
let u = r.lazy(() => n.e('22274').then(n.bind(n, 269792)));
function m() {
    let e = (0, a.Z)({ location: 'TenureLevelUpAnimationLazyWrapper' }),
        t = (0, l.Z)((e) => e.shouldRenderTenureLevelUp),
        n = (0, o.Z)();
    return e && t && null != n ? (0, i.jsx)(g, { levelUpData: n }) : null;
}
function g(e) {
    let { levelUpData: t } = e,
        n = r.useRef(null),
        a = r.useCallback(() => {
            l.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, []);
    return (
        r.useEffect(() => a, [a]),
        (0, i.jsxs)('div', {
            className: d.wrapper,
            children: [
                (0, i.jsx)(s.EqS, {
                    containerRef: n,
                    children: (0, i.jsx)(s.M0o, {
                        className: d.closeButton,
                        tooltip: c.intl.string(c.t.cpT0Cg),
                        color: s.YX$.SECONDARY,
                        size: s.tT7.SIZE_24,
                        icon: (0, i.jsx)(s.Dio, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        onClick: a
                    })
                }),
                (0, i.jsx)(r.Suspense, {
                    fallback: null,
                    children: (0, i.jsx)(u, { levelUpData: t })
                })
            ]
        })
    );
}
