"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    u = n(397927),
    c = n(775602),
    d = n(688810),
    _ = n(101555),
    f = n(253932),
    p = n(183555),
    h = n(985018),
    m = n(940463);
let g = 300,
    E = (e) =>
        (0, u.mMO)(async () => {
            let { default: t } = await n.e("41091").then(n.bind(n, 431374));
            return (n) => (0, r.jsx)(t, { ...n, sourceAnalyticsLocations: e });
        });
function A(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: a } = e,
        { analyticsLocations: A } = (0, d.Ay)(),
        { trackUserProfileAction: I } = (0, p.NJ)(),
        T = i.useRef(null),
        y = i.useRef(null),
        [S, v] = (0, o.yK)([c.A], () => [c.A.useReducedMotion, c.A.keyboardModeEnabled]),
        C = !n || S || v ? 0 : g,
        b = () => {
            I({ action: "PRESS_EDIT_CUSTOM_STATUS" }), E(A), a?.();
        },
        N = () => {
            I({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), f.G2.updateSetting(void 0);
        };
    return (0, r.jsxs)(_.Ay, {
        className: s()(m.oO, { [m.RK]: t, [m.lu]: n }),
        children: [
            (0, r.jsx)(l.m, {
                asContainer: !0,
                targetElementRef: T,
                text: h.intl.string(h.t.bt75uw),
                delay: C,
                ariaHidden: !0,
                children: (0, r.jsx)(_.$n, {
                    ref: T,
                    className: s()(m.x6, m.kb),
                    "aria-label": h.intl.string(h.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: b,
                    children: (0, r.jsx)(u.R2l, { size: "xs", colorClass: m.Kk }),
                }),
            }),
            (0, r.jsx)(l.m, {
                asContainer: !0,
                text: h.intl.string(h.t.VkKicb),
                delay: C,
                ariaHidden: !0,
                children: (0, r.jsx)(_.$n, {
                    ref: y,
                    className: s()(m.x6, m.pG),
                    "aria-label": h.intl.string(h.t.wfYTHe),
                    onClick: N,
                    children: (0, r.jsx)(u.ucK, { size: "xs", colorClass: m.Kk }),
                }),
            }),
        ],
    });
}
