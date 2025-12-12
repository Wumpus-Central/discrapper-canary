n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(28664),
    c = n(481060),
    u = n(607070),
    d = n(906732),
    f = n(951394),
    p = n(695346),
    _ = n(785717),
    m = n(388032),
    h = n(81064);
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
function S(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: o } = e,
        { analyticsLocations: g } = (0, d.ZP)(),
        { trackUserProfileAction: E } = (0, _.KZ)(),
        b = i.useRef(null),
        y = i.useRef(null),
        [S, I] = (0, s.Wu)([u.Z], () => [u.Z.useReducedMotion, u.Z.keyboardModeEnabled]),
        T = !n || S || I ? 0 : O,
        C = () => {
            E({ action: "PRESS_EDIT_CUSTOM_STATUS" }), v(g), null == o || o();
        },
        A = () => {
            E({ action: "PRESS_CLEAR_CUSTOM_STATUS" }), p.Ok.updateSetting(void 0);
        };
    return (0, r.jsxs)(f.ZP, {
        className: a()(h.popover, {
            [h.visible]: t,
            [h.expandable]: n,
        }),
        children: [
            (0, r.jsx)(l.u, {
                asContainer: !0,
                targetElementRef: b,
                text: m.intl.string(m.t.bt75uw),
                delay: T,
                ariaHidden: !0,
                children: (0, r.jsx)(f.zx, {
                    ref: b,
                    className: a()(h.button, h.left),
                    "aria-label": m.intl.string(m.t.QdHxos),
                    "aria-haspopup": "dialog",
                    onClick: C,
                    children: (0, r.jsx)(c.vdY, {
                        size: "xs",
                        colorClass: h.icon,
                    }),
                }),
            }),
            (0, r.jsx)(l.u, {
                asContainer: !0,
                text: m.intl.string(m.t.VkKicb),
                delay: T,
                ariaHidden: !0,
                children: (0, r.jsx)(f.zx, {
                    ref: y,
                    className: a()(h.button, h.right),
                    "aria-label": m.intl.string(m.t.wfYTHe),
                    onClick: A,
                    children: (0, r.jsx)(c.XHJ, {
                        size: "xs",
                        colorClass: h.icon,
                    }),
                }),
            }),
        ],
    });
}
