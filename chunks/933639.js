"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(775602),
    d = n(688810),
    _ = n(101555),
    f = n(253932),
    p = n(183555),
    h = n(939496),
    m = n(996988),
    E = n(985018),
    g = n(241384);
let A = 300,
    I = (e) => {
        let { analyticsLocations: t, stackingBehavior: i } = e;
        return (0, u.mMO)(
            async () => {
                let { default: e } = await n.e("41091").then(n.bind(n, 431374));
                return (n) => (0, r.jsx)(e, { ...n, sourceAnalyticsLocations: t });
            },
            null != i ? { stackingBehavior: i } : void 0,
        );
    };
function T(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: s } = e,
        { analyticsLocations: T } = (0, d.Ay)(),
        { trackUserProfileAction: S } = (0, p.NJ)(),
        y = i.useRef(null),
        v = i.useRef(null),
        [N, C] = (0, o.yK)([c.A], () => [c.A.useReducedMotion, c.A.keyboardModeEnabled]),
        R = !n || N || C ? 0 : A,
        { themeType: O } = (0, h.E)(),
        b = () => {
            S({ action: "PRESS_EDIT_CUSTOM_STATUS" }),
                I({ analyticsLocations: T, stackingBehavior: O === m.d.MODAL_V2 ? "stack" : void 0 }),
                s?.();
        },
        D = () => {
            S({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), f.G2.updateSetting(void 0);
        };
    return (0, r.jsxs)(_.Ay, {
        className: a()(g.oO, { [g.RK]: t, [g.lu]: n }),
        children: [
            (0, r.jsx)(l.m, {
                asContainer: !0,
                targetElementRef: y,
                text: E.intl.string(E.t.bt75uw),
                delay: R,
                ariaHidden: !0,
                children: (0, r.jsx)(_.$n, {
                    ref: y,
                    className: a()(g.x6, g.kb),
                    "aria-label": E.intl.string(E.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: b,
                    children: (0, r.jsx)(u.R2l, { size: "xs", colorClass: g.Kk }),
                }),
            }),
            (0, r.jsx)(l.m, {
                asContainer: !0,
                text: E.intl.string(E.t.VkKicb),
                delay: R,
                ariaHidden: !0,
                children: (0, r.jsx)(_.$n, {
                    ref: v,
                    className: a()(g.x6, g.pG),
                    "aria-label": E.intl.string(E.t.wfYTHe),
                    onClick: D,
                    children: (0, r.jsx)(u.ucK, { size: "xs", colorClass: g.Kk }),
                }),
            }),
        ],
    });
}
