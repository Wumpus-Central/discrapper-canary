n.d(t, { Z: () => P }), n(47120);
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
    T = n(388032),
    O = n(861386),
    S = n(125534);
let P =
    12633 == n.j
        ? () => {
              let e = (0, a.e7)([d.Z], () => d.Z.getGuildId(), []),
                  t = (0, a.e7)([E.Z], () => E.Z.getGuild(e), [e]),
                  n = (0, a.e7)([N.Z], () => N.Z.getHistorySnapshot(), []),
                  [l, P] = i.useState(!1);
              if (null == t) return null;
              let p = async () => {
                  P(!0);
                  try {
                      _.mT(t.id), await c.Z.joinGuild(t.id, { source: I.vtS.NOTICE_BAR });
                  } catch (e) {
                      P(!1);
                  }
              };
              return (0, r.jsxs)('div', {
                  className: o()(O.notice, S.notice),
                  children: [
                      (0, r.jsxs)(s.zxk, {
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          className: o()(O.button, O.back),
                          innerClassName: O.iconButton,
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
                                  className: O.arrow
                              }),
                              T.NW.string(T.t['13/7kZ'])
                          ]
                      }),
                      (0, r.jsx)(s.Text, {
                          className: O.header,
                          variant: 'text-sm/normal',
                          children: T.NW.string(T.t['N/y2WF'])
                      }),
                      (0, r.jsx)(s.zxk, {
                          className: O.button,
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          submitting: l,
                          onClick: p,
                          children: T.NW.format(T.t.uHN7n5, { guild: t.name })
                      })
                  ]
              });
          }
        : null;
