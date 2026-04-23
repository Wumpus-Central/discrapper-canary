"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(192308),
    c = n(22231),
    d = n(241326),
    _ = n(775602),
    f = n(688810),
    p = n(101555),
    h = n(253932),
    E = n(183555),
    m = n(939496),
    g = n(996988),
    A = n(985018),
    I = n(242744);
function T(e) {
    let { isVisible: t, isExpandable: s, onCloseProfile: T } = e,
        { analyticsLocations: S } = (0, f.Ay)(),
        { trackUserProfileAction: y } = (0, E.NJ)(),
        N = i.useRef(null),
        v = i.useRef(null),
        [C, O] = (0, o.yK)([_.A], () => [_.A.useReducedMotion, _.A.keyboardModeEnabled]),
        R = !s || C || O ? 0 : 300,
        { themeType: b } = (0, m.E)();
    return (0, r.jsxs)(p.Ay, {
        className: a()(I.oO, { [I.RK]: t, [I.lu]: s }),
        children: [
            (0, r.jsx)(l.m, {
                asContainer: !0,
                targetElementRef: N,
                text: A.intl.string(A.t.bt75uw),
                delay: R,
                ariaHidden: !0,
                children: (0, r.jsx)(p.$n, {
                    ref: N,
                    className: a()(I.x6, I.kb),
                    "aria-label": A.intl.string(A.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: () => {
                        y({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                            ((e) => {
                                let { analyticsLocations: t, stackingBehavior: i } = e;
                                return (0, u.openModalLazy)(
                                    async () => {
                                        let { default: e } = await n.e("41091").then(n.bind(n, 431374));
                                        return (n) => (0, r.jsx)(e, { ...n, sourceAnalyticsLocations: t });
                                    },
                                    null != i ? { stackingBehavior: i } : void 0,
                                );
                            })({ analyticsLocations: S, stackingBehavior: b === g.d.MODAL_V2 ? "stack" : void 0 }),
                            T?.();
                    },
                    children: (0, r.jsx)(c.R, { size: "xs", colorClass: I.Kk }),
                }),
            }),
            (0, r.jsx)(l.m, {
                asContainer: !0,
                text: A.intl.string(A.t.VkKicb),
                delay: R,
                ariaHidden: !0,
                children: (0, r.jsx)(p.$n, {
                    ref: v,
                    className: a()(I.x6, I.pG),
                    "aria-label": A.intl.string(A.t.wfYTHe),
                    onClick: () => {
                        y({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), h.G2.updateSetting(void 0);
                    },
                    children: (0, r.jsx)(d.u, { size: "xs", colorClass: I.Kk }),
                }),
            }),
        ],
    });
}
