n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(607070),
    d = n(906732),
    f = n(951394),
    _ = n(695346),
    p = n(785717),
    h = n(388032),
    m = n(81064);
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
    v = (e) =>
        (0, c.ZDy)(async () => {
            let { default: t } = await n.e("76215").then(n.bind(n, 66630));
            return (n) => (0, r.jsx)(t, y(E({}, n), { sourceAnalyticsLocations: e }));
        });
function I(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: a } = e,
        { analyticsLocations: g } = (0, d.ZP)(),
        { trackUserProfileAction: E } = (0, p.KZ)(),
        b = i.useRef(null),
        y = i.useRef(null),
        [I, S] = (0, s.Wu)([u.Z], () => [u.Z.useReducedMotion, u.Z.keyboardModeEnabled]),
        T = !n || I || S ? 0 : O,
        A = () => {
            E({ action: "PRESS_EDIT_CUSTOM_STATUS" }), v(g), null == a || a();
        },
        C = () => {
            E({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), _.Ok.updateSetting(void 0);
        };
    return (0, r.jsxs)(f.ZP, {
        className: o()(m.popover, {
            [m.visible]: t,
            [m.expandable]: n,
        }),
        children: [
            (0, r.jsx)(l.u, {
                asContainer: !0,
                targetElementRef: b,
                text: h.intl.string(h.t.bt75uw),
                delay: T,
                "aria-label": !1,
                children: (0, r.jsx)(f.zx, {
                    ref: b,
                    className: o()(m.button, m.left),
                    "aria-label": h.intl.string(h.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: A,
                    children: (0, r.jsx)(c.vdY, {
                        size: "xs",
                        colorClass: m.icon,
                    }),
                }),
            }),
            (0, r.jsx)(l.u, {
                asContainer: !0,
                text: h.intl.string(h.t.VkKicb),
                delay: T,
                "aria-label": !1,
                children: (0, r.jsx)(f.zx, {
                    ref: y,
                    className: o()(m.button, m.right),
                    "aria-label": h.intl.string(h.t.wfYTHe),
                    onClick: C,
                    children: (0, r.jsx)(c.XHJ, {
                        size: "xs",
                        colorClass: m.icon,
                    }),
                }),
            }),
        ],
    });
}
