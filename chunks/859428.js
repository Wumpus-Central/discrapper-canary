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
    N = n(981631),
    I = n(388032),
    O = n(8940),
    T = n(240211);
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
                      _.mT(t.id), await c.Z.joinGuild(t.id, { source: N.vtS.NOTICE_BAR });
                  } catch (e) {
                      l(!1);
                  }
              };
              return (0, r.jsxs)('div', {
                  className: o()(O.notice, T.notice),
                  children: [
                      (0, r.jsxs)(s.zxk, {
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          className: o()(O.button, O.back),
                          innerClassName: O.iconButton,
                          onClick: () => {
                              (0, u.s1)().goBack();
                          },
                          children: [
                              (0, r.jsx)(s.whL, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: O.arrow
                              }),
                              I.NW.string(I.t['13/7kZ'])
                          ]
                      }),
                      (0, r.jsx)(s.Text, {
                          className: O.header,
                          variant: 'text-sm/normal',
                          children: I.NW.string(I.t['N/y2WF'])
                      }),
                      (0, r.jsx)(s.zxk, {
                          className: O.button,
                          look: s.zxk.Looks.OUTLINED,
                          color: s.zxk.Colors.WHITE,
                          size: s.zxk.Sizes.NONE,
                          submitting: n,
                          onClick: S,
                          children: I.NW.format(I.t.uHN7n5, { guild: t.name })
                      })
                  ]
              });
          }
        : null;
