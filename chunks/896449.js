n.d(t, {
    N: () => b,
    Z: () => y
});
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(239091),
    s = n(299206),
    l = n(810568),
    c = n(168524),
    u = n(37258),
    d = n(26033),
    f = n(178762),
    _ = n(388032),
    p = n(442826);
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
let b = 'content-inventory-context';
function y(e) {
    var t;
    let { user: n, guildId: h, channel: g, entry: y, onSelect: v, disableGameProfileLinks: O } = e,
        I = i.useRef(null),
        S = i.useContext(f.Ir),
        T = (0, u.Z)({
            userId: n.id,
            guildId: h,
            channelId: null == g ? void 0 : g.id,
            onAction: S
        }),
        A = (0, s.Z)({
            id: n.id,
            label: _.intl.string(_.t['/AXYnJ'])
        }),
        N = 'application_id' in y.extra ? y.extra.application_id : null,
        C = (0, s.Z)({
            id: N,
            label: _.intl.string(_.t['FfCL+/'])
        }),
        R = (0, d.dX)(y),
        P = (0, c.Z)({
            location: 'ContentPopoutContextMenu',
            applicationId: R && !0 !== O ? (null == (t = y.extra) ? void 0 : t.application_id) : void 0,
            source: l.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: y.author_id
        });
    return (0, r.jsx)(a.yRy, {
        targetElementRef: I,
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(a.v2r, {
                navId: b,
                onClose: () => {
                    (0, o.Zy)(), t();
                },
                'aria-label': _.intl.string(_.t.liqwPD),
                onSelect: v,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(a.kSQ, {
                            children: [
                                T,
                                null != P &&
                                    (0, r.jsx)(a.sNh, {
                                        id: 'game-profile',
                                        label: _.intl.string(_.t.f7aVGh),
                                        action: (e) => {
                                            P(e), null == S || S();
                                        }
                                    })
                            ]
                        }),
                        (0, r.jsxs)(a.kSQ, {
                            children: [A, C]
                        })
                    ]
                })
            });
        },
        children: (e) =>
            (0, r.jsx)(a.ua7, {
                text: _.intl.string(_.t.UKOtz8),
                children: (t) =>
                    (0, r.jsx)(
                        a.P3F,
                        E(m(E(m({ innerRef: I }, t), { className: p.menuIcon }), e), {
                            children: (0, r.jsx)(a.xhG, {
                                color: 'currentColor',
                                size: 'custom',
                                width: 16,
                                height: 16
                            })
                        })
                    )
            })
    });
}
