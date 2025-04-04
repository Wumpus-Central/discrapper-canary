n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(906732),
    d = n(951394),
    f = n(695346),
    _ = n(785717),
    p = n(388032),
    h = n(318971);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 300,
    v = (e) =>
        (0, l.ZDy)(async () => {
            let { default: t } = await n.e('31649').then(n.bind(n, 475613));
            return (n) =>
                (0, r.jsx)(
                    t,
                    b(g({}, n), {
                        sourceAnalyticsLocations: e,
                        location: 'UserProfileCustomStatusBubbleEditBar'
                    })
                );
        });
function O(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: o } = e,
        { analyticsLocations: m } = (0, u.ZP)(),
        { trackUserProfileAction: g } = (0, _.KZ)(),
        E = i.useRef(null),
        b = i.useRef(null),
        [O, I] = (0, s.Wu)([c.Z], () => [c.Z.useReducedMotion, c.Z.keyboardModeEnabled]),
        S = !n || O || I ? 0 : y,
        T = () => {
            g({ action: 'PRESS_EDIT_CUSTOM_STATUS' }), v(m), null == o || o();
        },
        N = () => {
            g({ action: 'PRESS_CLEAR_CUSTOM_STATUS' }), f.Ok.updateSetting(void 0);
        };
    return (0, r.jsxs)(d.ZP, {
        className: a()(h.popover, {
            [h.visible]: t,
            [h.expandable]: n
        }),
        children: [
            (0, r.jsx)(l.DY3, {
                targetElementRef: E,
                text: p.NW.string(p.t.bt75u7),
                delay: S,
                'aria-label': !1,
                children: (0, r.jsx)(d.zx, {
                    ref: E,
                    className: a()(h.button, h.left),
                    'aria-label': p.NW.string(p.t.QdHxoq),
                    'aria-haspopup': 'dialog',
                    onClick: T,
                    children: (0, r.jsx)(l.vdY, {
                        size: 'xs',
                        colorClass: h.icon
                    })
                })
            }),
            (0, r.jsx)(l.DY3, {
                text: p.NW.string(p.t.VkKicX),
                delay: S,
                'aria-label': !1,
                children: (0, r.jsx)(d.zx, {
                    ref: b,
                    className: a()(h.button, h.right),
                    'aria-label': p.NW.string(p.t.wfYTHR),
                    onClick: N,
                    children: (0, r.jsx)(l.XHJ, {
                        size: 'xs',
                        colorClass: h.icon
                    })
                })
            })
        ]
    });
}
