n.d(t, { Z: () => y }), n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(906732),
    u = n(951394),
    d = n(695346),
    f = n(785717),
    p = n(388032),
    _ = n(515054);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = 300,
    b = (e) =>
        (0, s.ZDy)(async () => {
            let { default: t } = await n.e('31649').then(n.bind(n, 475613));
            return (n) =>
                (0, r.jsx)(
                    t,
                    E(m({}, n), {
                        sourceAnalyticsLocations: e,
                        location: 'UserProfileCustomStatusBubbleEditBar'
                    })
                );
        });
function y(e) {
    let { isVisible: t, isExpandable: n, onCloseProfile: i } = e,
        { analyticsLocations: h } = (0, c.ZP)(),
        { trackUserProfileAction: m } = (0, f.KZ)(),
        [g, E] = (0, a.Wu)([l.Z], () => [l.Z.useReducedMotion, l.Z.keyboardModeEnabled]),
        y = !n || g || E ? 0 : v,
        O = () => {
            m({ action: 'PRESS_EDIT_CUSTOM_STATUS' }), b(h), null == i || i();
        },
        S = () => {
            m({ action: 'PRESS_CLEAR_CUSTOM_STATUS' }), d.Ok.updateSetting(void 0);
        };
    return (0, r.jsxs)(u.ZP, {
        className: o()(_.popover, {
            [_.visible]: t,
            [_.expandable]: n
        }),
        children: [
            (0, r.jsx)(s.DY3, {
                text: p.NW.string(p.t.bt75u7),
                delay: y,
                'aria-label': !1,
                children: (0, r.jsx)(u.zx, {
                    className: o()(_.button, _.left),
                    'aria-label': p.NW.string(p.t.QdHxoq),
                    'aria-haspopup': 'dialog',
                    onClick: O,
                    children: (0, r.jsx)(s.vdY, {
                        size: 'xs',
                        colorClass: _.icon
                    })
                })
            }),
            (0, r.jsx)(s.DY3, {
                text: p.NW.string(p.t.VkKicX),
                delay: y,
                'aria-label': !1,
                children: (0, r.jsx)(u.zx, {
                    className: o()(_.button, _.right),
                    'aria-label': p.NW.string(p.t.wfYTHR),
                    onClick: S,
                    children: (0, r.jsx)(s.XHJ, {
                        size: 'xs',
                        colorClass: _.icon
                    })
                })
            })
        ]
    });
}
