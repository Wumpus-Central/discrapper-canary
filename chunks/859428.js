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
    h = n(981631),
    f = n(388032),
    m = n(861386),
    O = n(125534);
let N = () => {
    let e = (0, s.e7)([_.Z], () => _.Z.getGuildId(), []),
        t = (0, s.e7)([d.Z], () => d.Z.getGuild(e), [e]),
        n = (0, s.e7)([p.Z], () => p.Z.getHistorySnapshot(), []),
        [l, N] = i.useState(!1);
    if (null == t) return null;
    let g = async () => {
        N(!0);
        try {
            E.mT(t.id), await c.Z.joinGuild(t.id, { source: h.vtS.NOTICE_BAR });
        } catch (e) {
            N(!1);
        }
    };
    return (0, r.jsxs)('div', {
        className: o()(m.notice, O.notice),
        children: [
            (0, r.jsxs)(a.zxk, {
                look: a.zxk.Looks.OUTLINED,
                color: a.zxk.Colors.WHITE,
                size: a.zxk.Sizes.NONE,
                className: o()(m.button, m.back),
                innerClassName: m.iconButton,
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
                        className: m.arrow
                    }),
                    f.NW.string(f.t['13/7kZ'])
                ]
            }),
            (0, r.jsx)(a.Text, {
                className: m.header,
                variant: 'text-sm/normal',
                children: f.NW.string(f.t['N/y2WF'])
            }),
            (0, r.jsx)(a.zxk, {
                className: m.button,
                look: a.zxk.Looks.OUTLINED,
                color: a.zxk.Colors.WHITE,
                size: a.zxk.Sizes.NONE,
                submitting: l,
                onClick: g,
                children: f.NW.format(f.t.uHN7n5, { guild: t.name })
            })
        ]
    });
};
