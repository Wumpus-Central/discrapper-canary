n.d(t, { Z: () => b }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(703656),
    d = n(430824),
    _ = n(914010),
    p = n(900849),
    E = n(41776),
    f = n(981631),
    m = n(388032),
    h = n(773711),
    g = n(361275);
let b = () => {
    let e = (0, a.e7)([_.Z], () => _.Z.getGuildId(), []),
        t = (0, a.e7)([d.Z], () => d.Z.getGuild(e), [e]),
        n = (0, a.e7)([E.Z], () => E.Z.getHistorySnapshot(), []),
        [o, b] = i.useState(!1);
    if (null == t) return null;
    let O = async () => {
        b(!0);
        try {
            p.mT(t.id), await c.Z.joinGuild(t.id, { source: f.vtS.NOTICE_BAR });
        } catch (e) {
            b(!1);
        }
    };
    return (0, r.jsxs)('div', {
        className: l()(h.notice, g.notice),
        children: [
            (0, r.jsxs)(s.zxk, {
                look: s.zxk.Looks.OUTLINED,
                color: s.zxk.Colors.WHITE,
                size: s.zxk.Sizes.NONE,
                className: l()(h.button, h.back),
                innerClassName: h.iconButton,
                onClick: () => {
                    let e = (0, u.s1)();
                    null != n && null != n.location
                        ? (0, u.dL)(
                              (function (e) {
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
                              })({}, n.location)
                          )
                        : e.goBack();
                },
                children: [
                    (0, r.jsx)(s.whL, {
                        size: 'xs',
                        color: 'currentColor',
                        className: h.arrow
                    }),
                    m.NW.string(m.t['13/7kZ'])
                ]
            }),
            (0, r.jsx)(s.Text, {
                className: h.header,
                variant: 'text-sm/normal',
                children: m.NW.string(m.t['N/y2WF'])
            }),
            (0, r.jsx)(s.zxk, {
                className: h.button,
                look: s.zxk.Looks.OUTLINED,
                color: s.zxk.Colors.WHITE,
                size: s.zxk.Sizes.NONE,
                submitting: o,
                onClick: O,
                children: m.NW.format(m.t.uHN7n5, { guild: t.name })
            })
        ]
    });
};
