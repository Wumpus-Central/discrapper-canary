(n.d(t, { Z: () => C }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(755721),
    c = n(481060),
    d = n(749210),
    u = n(703656),
    h = n(430824),
    _ = n(914010),
    E = n(900849),
    p = n(981631),
    I = n(388032),
    g = n(8940),
    f = n(240211);
let C =
    12633 == n.j
        ? () => {
              let e = (0, s.e7)([_.Z], () => _.Z.getGuildId(), []),
                  t = (0, s.e7)([h.Z], () => h.Z.getGuild(e), [e]),
                  [n, l] = r.useState(!1);
              if (null == t) return null;
              let C = async () => {
                  l(!0);
                  try {
                      (E.mT(t.id), await d.Z.joinGuild(t.id, { source: p.vtS.NOTICE_BAR }));
                  } catch (e) {
                      l(!1);
                  }
              };
              return (0, i.jsxs)('div', {
                  className: o()(g.notice, f.notice),
                  children: [
                      (0, i.jsxs)(a.zx, {
                          look: a.zx.Looks.OUTLINED,
                          color: a.zx.Colors.WHITE,
                          size: a.zx.Sizes.NONE,
                          className: o()(g.button, g.back),
                          innerClassName: g.iconButton,
                          onClick: () => {
                              (0, u.s1)().goBack();
                          },
                          children: [
                              (0, i.jsx)(c.whL, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: g.arrow
                              }),
                              I.intl.string(I.t['13/7kZ'])
                          ]
                      }),
                      (0, i.jsx)(c.Text, {
                          className: g.header,
                          variant: 'text-sm/normal',
                          children: I.intl.string(I.t['N/y2WF'])
                      }),
                      (0, i.jsx)(a.zx, {
                          className: g.button,
                          look: a.zx.Looks.OUTLINED,
                          color: a.zx.Colors.WHITE,
                          size: a.zx.Sizes.NONE,
                          submitting: n,
                          onClick: C,
                          children: I.intl.format(I.t.uHN7n5, { guild: t.name })
                      })
                  ]
              });
          }
        : null;
