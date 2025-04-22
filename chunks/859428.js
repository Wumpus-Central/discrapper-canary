n.d(t, { Z: () => S }), n(388685);
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
    I = n(981631),
    O = n(388032),
    T = n(8940),
    N = n(240211);
let S =
    12633 == n.j
        ? () => {
              let e = (0, a.e7)([d.Z], () => d.Z.getGuildId(), []),
                  t = (0, a.e7)([E.Z], () => E.Z.getGuild(e), [e]),
                  [n, l] = i.useState(!1);
              if (null == t) return null;
              let S = async () => {
                  l(!0);
                  try {
                      _.mT(t.id), await c.Z.joinGuild(t.id, { source: I.vtS.NOTICE_BAR });
                  } catch (e) {
                      l(!1);
                  }
              };
              return (0, r.jsxs)('div', {
                  className: o()(T.notice, N.notice),
                  children: [
                      (0, r.jsxs)(s.zxk, {
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          className: o()(T.button, T.back),
                          innerClassName: T.iconButton,
                          onClick: () => {
                              (0, u.s1)().goBack();
                          },
                          children: [
                              (0, r.jsx)(s.whL, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: T.arrow
                              }),
                              O.intl.string(O.t['13/7kZ'])
                          ]
                      }),
                      (0, r.jsx)(s.Text, {
                          className: T.header,
                          variant: 'text-sm/normal',
                          children: O.intl.string(O.t['N/y2WF'])
                      }),
                      (0, r.jsx)(s.zxk, {
                          className: T.button,
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          submitting: n,
                          onClick: S,
                          children: O.intl.format(O.t.uHN7n5, { guild: t.name })
                      })
                  ]
              });
          }
        : null;
