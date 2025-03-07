n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(749210),
    u = n(703656),
    E = n(430824),
    d = n(914010),
    _ = n(900849),
    N = n(41776),
    I = n(981631),
    O = n(388032),
    T = n(773711),
    S = n(361275);
let p =
    12633 == n.j
        ? () => {
              let e = (0, a.e7)([d.Z], () => d.Z.getGuildId(), []),
                  t = (0, a.e7)([E.Z], () => E.Z.getGuild(e), [e]),
                  n = (0, a.e7)([N.Z], () => N.Z.getHistorySnapshot(), []),
                  [l, p] = i.useState(!1);
              if (null == t) return null;
              let P = async () => {
                  p(!0);
                  try {
                      _.mT(t.id), await c.Z.joinGuild(t.id, { source: I.vtS.NOTICE_BAR });
                  } catch (e) {
                      p(!1);
                  }
              };
              return (0, r.jsxs)('div', {
                  className: o()(T.notice, S.notice),
                  children: [
                      (0, r.jsxs)(s.zxk, {
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          className: o()(T.button, T.back),
                          innerClassName: T.iconButton,
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
                                  className: T.arrow
                              }),
                              O.NW.string(O.t['13/7kZ'])
                          ]
                      }),
                      (0, r.jsx)(s.Text, {
                          className: T.header,
                          variant: 'text-sm/normal',
                          children: O.NW.string(O.t['N/y2WF'])
                      }),
                      (0, r.jsx)(s.zxk, {
                          className: T.button,
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          submitting: l,
                          onClick: P,
                          children: O.NW.format(O.t.uHN7n5, { guild: t.name })
                      })
                  ]
              });
          }
        : null;
