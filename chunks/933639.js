n.d(t, { A: () => x });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    o = n(311907),
    s = n(990078),
    c = n(192308),
    u = n(22231),
    d = n(241326),
    f = n(775602),
    _ = n(688810),
    h = n(101555),
    A = n(253932),
    p = n(183555),
    m = n(939496),
    S = n(996988),
    g = n(985018),
    b = n(242744);
function x(e) {
    let { isVisible: t, isExpandable: l, onCloseProfile: x } = e,
        { analyticsLocations: T } = (0, _.Ay)(),
        { trackUserProfileAction: E } = (0, p.NJ)(),
        R = r.useRef(null),
        v = r.useRef(null),
        [C, y] = (0, o.yK)([f.A], () => [f.A.useReducedMotion, f.A.keyboardModeEnabled]),
        j = !l || C || y ? 0 : 300,
        { themeType: I } = (0, m.E)();
    return (0, a.jsxs)(h.Ay, {
        className: i()(b.oO, { [b.RK]: t, [b.lu]: l }),
        children: [
            (0, a.jsx)(s.m, {
                asContainer: !0,
                targetElementRef: R,
                text: g.intl.string(g.t.bt75uw),
                delay: j,
                ariaHidden: !0,
                children: (0, a.jsx)(h.$n, {
                    ref: R,
                    className: i()(b.x6, b.kb),
                    "aria-label": g.intl.string(g.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: () => {
                        E({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                            ((e) => {
                                let { analyticsLocations: t, stackingBehavior: r } = e;
                                return (0, c.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("28367"),
                                            n.e("27411"),
                                            n.e("82166"),
                                        ]).then(n.bind(n, 431374));
                                        return (n) => (0, a.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                    },
                                    null != r ? { stackingBehavior: r } : void 0,
                                );
                            })({ analyticsLocations: T, stackingBehavior: I === S.d.MODAL_V2 ? "stack" : void 0 }),
                            x?.();
                    },
                    children: (0, a.jsx)(u.R, { size: "xs", colorClass: b.Kk }),
                }),
            }),
            (0, a.jsx)(s.m, {
                asContainer: !0,
                text: g.intl.string(g.t.VkKicb),
                delay: j,
                ariaHidden: !0,
                children: (0, a.jsx)(h.$n, {
                    ref: v,
                    className: i()(b.x6, b.pG),
                    "aria-label": g.intl.string(g.t.wfYTHe),
                    onClick: () => {
                        E({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), A.G2.updateSetting(void 0);
                    },
                    children: (0, a.jsx)(d.u, { size: "xs", colorClass: b.Kk }),
                }),
            }),
        ],
    });
}
