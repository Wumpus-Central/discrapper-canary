n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(749210),
    u = n(703656),
    d = n(430824),
    _ = n(914010),
    E = n(900849),
    p = n(41776),
    m = n(981631),
    h = n(388032),
    f = n(773711),
    g = n(361275);
let N = () => {
    let e = (0, s.e7)([_.Z], () => _.Z.getGuildId(), []),
        t = (0, s.e7)([d.Z], () => d.Z.getGuild(e), [e]),
        n = (0, s.e7)([p.Z], () => p.Z.getHistorySnapshot(), []),
        [l, N] = i.useState(!1);
    if (null == t) return null;
    let O = async () => {
        N(!0);
        try {
            E.mT(t.id), await c.Z.joinGuild(t.id, { source: m.vtS.NOTICE_BAR });
        } catch (e) {
            N(!1);
        }
    };
    return (0, r.jsxs)('div', {
        className: o()(f.notice, g.notice),
        children: [
            (0, r.jsxs)(a.zxk, {
                look: a.zxk.Looks.OUTLINED,
                color: a.zxk.Colors.WHITE,
                size: a.zxk.Sizes.NONE,
                className: o()(f.button, f.back),
                innerClassName: f.iconButton,
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
                    (0, r.jsx)(a.whL, {
                        size: 'xs',
                        color: 'currentColor',
                        className: f.arrow
                    }),
                    h.NW.string(h.t['13/7kZ'])
                ]
            }),
            (0, r.jsx)(a.Text, {
                className: f.header,
                variant: 'text-sm/normal',
                children: h.NW.string(h.t['N/y2WF'])
            }),
            (0, r.jsx)(a.zxk, {
                className: f.button,
                look: a.zxk.Looks.OUTLINED,
                color: a.zxk.Colors.WHITE,
                size: a.zxk.Sizes.NONE,
                submitting: l,
                onClick: O,
                children: h.NW.format(h.t.uHN7n5, { guild: t.name })
            })
        ]
    });
};
