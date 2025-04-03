t.d(r, { default: () => b }), t(266796), t(47120);
var n = t(200651);
t(192379);
var o = t(481060),
    s = t(313201),
    c = t(930180),
    i = t(320596),
    l = t(388032),
    a = t(891430);
function d(e) {
    let { blockedUsersCount: r, ignoredUsersCount: t } = e;
    return r > 0 && t > 0 ? l.NW.format(l.t.Uzdyho, { number: r + t }) : t > 0 ? l.NW.format(l.t.wvygk5, { number: t }) : l.NW.format(l.t.HviVAw, { number: r });
}
function u(e) {
    let { blockedUsersCount: r, ignoredUsersCount: t } = e;
    return r > 0 && t > 0 ? l.NW.string(l.t['P/KFX1']) : t > 0 ? l.NW.format(l.t.Ri3o39, { number: t }) : l.NW.format(l.t['28qZMT'], { number: r });
}
function b(e) {
    var r,
        t,
        { channel: b, onAccept: m, transitionState: j, onClose: x } = e,
        f = (function (e, r) {
            if (null == e) return {};
            var t,
                n,
                o = (function (e, r) {
                    if (null == e) return {};
                    var t,
                        n,
                        o = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (t = s[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, r);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (t = s[n]), !(r.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ['channel', 'onAccept', 'transitionState', 'onClose']);
    let p = (0, s.Dt)(),
        h = (0, c.z)(b.id),
        g = (0, c.bA)(b.id);
    return (0, n.jsxs)(
        o.Y0X,
        ((r = (function (e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {},
                    n = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    n.forEach(function (r) {
                        var n;
                        (n = t[r]),
                            r in e
                                ? Object.defineProperty(e, r, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[r] = n);
                    });
            }
            return e;
        })(
            {
                transitionState: j,
                'aria-labelledby': p
            },
            f
        )),
        (t = t =
            {
                size: o.CgR.SMALL,
                children: [
                    (0, n.jsxs)(o.xBx, {
                        className: a.header,
                        children: [
                            (0, n.jsx)(o.X6q, {
                                variant: 'heading-xl/semibold',
                                children: (0, n.jsx)(d, {
                                    blockedUsersCount: h.length,
                                    ignoredUsersCount: g.length
                                })
                            }),
                            (0, n.jsx)(o.Text, {
                                color: 'header-secondary',
                                className: a.description,
                                variant: 'text-sm/normal',
                                children: (0, n.jsx)(u, {
                                    blockedUsersCount: h.length,
                                    ignoredUsersCount: g.length
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.hzk, {
                        className: a.content,
                        children: [...h, ...g].map((e) => {
                            let { user: r, id: t, speaker: o } = e;
                            return (0, n.jsx)(
                                i.Ie,
                                {
                                    user: r,
                                    speaker: o,
                                    showStatus: !0,
                                    channelId: b.id
                                },
                                t
                            );
                        })
                    }),
                    (0, n.jsxs)(o.mzw, {
                        className: a.footer,
                        children: [
                            (0, n.jsx)(o.zxk, {
                                onClick: () => {
                                    m(b), x();
                                },
                                color: o.zxk.Colors.BRAND,
                                children: l.NW.string(l.t.mbD50N)
                            }),
                            (0, n.jsx)(o.zxk, {
                                onClick: () => {
                                    x();
                                },
                                color: o.zxk.Colors.PRIMARY,
                                look: o.zxk.Looks.LINK,
                                children: l.NW.string(l.t.CZGqeX)
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
            : (function (e, r) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(t)).forEach(function (e) {
                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
              }),
        r)
    );
}
