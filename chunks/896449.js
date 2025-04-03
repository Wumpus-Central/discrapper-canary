n.d(t, { Z: () => x });
var r = n(200651),
    a = n(192379),
    l = n(481060),
    i = n(239091),
    o = n(299206),
    s = n(810568),
    c = n(168524),
    u = n(37258),
    d = n(26033),
    m = n(178762),
    p = n(388032),
    h = n(442826);
function f(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e) {
    var t;
    let { user: n, guildId: x, channel: v, entry: y, onSelect: j, disableGameProfileLinks: P } = e,
        O = a.useRef(null),
        b = a.useContext(m.Ir),
        C = (0, u.Z)({
            userId: n.id,
            guildId: x,
            channelId: null == v ? void 0 : v.id,
            onAction: b
        }),
        N = (0, o.Z)({
            id: n.id,
            label: p.NW.string(p.t['/AXYnJ'])
        }),
        I = 'application_id' in y.extra ? y.extra.application_id : null,
        E = (0, o.Z)({
            id: I,
            label: p.NW.string(p.t['FfCL+/'])
        }),
        w = (0, d.dX)(y),
        Z = (0, c.Z)({
            location: 'ContentPopoutContextMenu',
            applicationId: w && !0 !== P ? (null == (t = y.extra) ? void 0 : t.application_id) : void 0,
            source: s.m1.ActivityCardContextMenu,
            trackEntryPointImpression: !0,
            sourceUserId: y.author_id
        });
    return (0, r.jsx)(l.yRy, {
        targetElementRef: O,
        align: 'top',
        position: 'right',
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(l.v2r, {
                navId: 'content-inventory-context',
                onClose: () => {
                    (0, i.Zy)(), t();
                },
                'aria-label': p.NW.string(p.t.liqwPD),
                onSelect: j,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(l.kSQ, {
                            children: [
                                C,
                                null != Z &&
                                    (0, r.jsx)(l.sNh, {
                                        id: 'game-profile',
                                        label: p.NW.string(p.t.f7aVGh),
                                        action: (e) => {
                                            Z(e), null == b || b();
                                        }
                                    })
                            ]
                        }),
                        (0, r.jsxs)(l.kSQ, {
                            children: [N, E]
                        })
                    ]
                })
            });
        },
        children: (e) =>
            (0, r.jsx)(l.ua7, {
                text: p.NW.string(p.t.UKOtz8),
                children: (t) =>
                    (0, r.jsx)(
                        l.P3F,
                        g(f(g(f({ innerRef: O }, t), { className: h.menuIcon }), e), {
                            children: (0, r.jsx)(l.xhG, {
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
