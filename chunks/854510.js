r.d(t, { default: () => b }), r(266796), r(47120);
var n = r(200651);
r(192379);
var o = r(481060),
    s = r(313201),
    c = r(930180),
    i = r(46920),
    l = r(388032),
    a = r(550852);
function d(e) {
    let { blockedUsersCount: t, ignoredUsersCount: r } = e;
    return t > 0 && r > 0 ? l.NW.format(l.t.Uzdyho, { number: t + r }) : r > 0 ? l.NW.format(l.t.wvygk5, { number: r }) : l.NW.format(l.t.HviVAw, { number: t });
}
function u(e) {
    let { blockedUsersCount: t, ignoredUsersCount: r } = e;
    return t > 0 && r > 0 ? l.NW.string(l.t['P/KFX1']) : r > 0 ? l.NW.format(l.t.Ri3o39, { number: r }) : l.NW.format(l.t['28qZMT'], { number: t });
}
function b(e) {
    var t,
        r,
        { channel: b, onAccept: m, transitionState: j, onClose: x } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['channel', 'onAccept', 'transitionState', 'onClose']);
    let h = (0, s.Dt)(),
        p = (0, c.z)(b.id),
        g = (0, c.bA)(b.id);
    return (0, n.jsxs)(
        o.Y0X,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                transitionState: j,
                'aria-labelledby': h
            },
            f
        )),
        (r = r =
            {
                size: o.CgR.SMALL,
                children: [
                    (0, n.jsxs)(o.xBx, {
                        className: a.header,
                        children: [
                            (0, n.jsx)(o.X6q, {
                                variant: 'heading-xl/semibold',
                                children: (0, n.jsx)(d, {
                                    blockedUsersCount: p.length,
                                    ignoredUsersCount: g.length
                                })
                            }),
                            (0, n.jsx)(o.Text, {
                                color: 'header-secondary',
                                className: a.description,
                                variant: 'text-sm/normal',
                                children: (0, n.jsx)(u, {
                                    blockedUsersCount: p.length,
                                    ignoredUsersCount: g.length
                                })
                            })
                        ]
                    }),
                    (0, n.jsx)(o.hzk, {
                        className: a.content,
                        children: [...p, ...g].map((e) => {
                            let { user: t, id: r, speaker: o } = e;
                            return (0, n.jsx)(
                                i.Ie,
                                {
                                    user: t,
                                    speaker: o,
                                    showStatus: !0,
                                    channelId: b.id
                                },
                                r
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
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
