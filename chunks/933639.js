n.d(t, { A: () => v }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(990078),
    c = n(397927),
    u = n(775602),
    d = n(688810),
    f = n(101555),
    p = n(253932),
    _ = n(183555),
    h = n(985018),
    m = n(940463);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = 300,
    A = (e) =>
        (0, c.mMO)(async () => {
            let { default: t } = await n.e("41091").then(n.bind(n, 431374));
            return (n) => (0, r.jsx)(t, y(E({}, n), { sourceAnalyticsLocations: e }));
        });
function v(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: a } = e,
        { analyticsLocations: g } = (0, d.Ay)(),
        { trackUserProfileAction: E } = (0, _.NJ)(),
        b = i.useRef(null),
        y = i.useRef(null),
        [v, S] = (0, o.yK)([u.A], () => [u.A.useReducedMotion, u.A.keyboardModeEnabled]),
        I = !n || v || S ? 0 : O,
        T = () => {
            E({ action: "PRESS_EDIT_CUSTOM_STATUS" }), A(g), null == a || a();
        },
        C = () => {
            E({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), p.G2.updateSetting(void 0);
        };
    return (0, r.jsxs)(f.Ay, {
        className: s()(m.oO, {
            [m.RK]: t,
            [m.lu]: n,
        }),
        children: [
            (0, r.jsx)(l.m, {
                asContainer: !0,
                targetElementRef: b,
                text: h.intl.string(h.t.bt75uw),
                delay: I,
                ariaHidden: !0,
                children: (0, r.jsx)(f.$n, {
                    ref: b,
                    className: s()(m.x6, m.kb),
                    "aria-label": h.intl.string(h.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: T,
                    children: (0, r.jsx)(c.R2l, {
                        size: "xs",
                        colorClass: m.Kk,
                    }),
                }),
            }),
            (0, r.jsx)(l.m, {
                asContainer: !0,
                text: h.intl.string(h.t.VkKicb),
                delay: I,
                ariaHidden: !0,
                children: (0, r.jsx)(f.$n, {
                    ref: y,
                    className: s()(m.x6, m.pG),
                    "aria-label": h.intl.string(h.t.wfYTHe),
                    onClick: C,
                    children: (0, r.jsx)(c.ucK, {
                        size: "xs",
                        colorClass: m.Kk,
                    }),
                }),
            }),
        ],
    });
}
