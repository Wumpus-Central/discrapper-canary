(n.d(t, { Z: () => T }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(755721),
    c = n(481060),
    d = n(749210),
    u = n(703656),
    _ = n(430824),
    h = n(914010),
    E = n(900849),
    I = n(981631),
    p = n(388032),
    C = n(8940),
    g = n(240211);
let T =
    12633 == n.j
        ? () => {
              let e = (0, s.e7)([h.Z], () => h.Z.getGuildId(), []),
                  t = (0, s.e7)([_.Z], () => _.Z.getGuild(e), [e]),
                  [n, l] = r.useState(!1);
              if (null == t) return null;
              let T = async () => {
                  l(!0);
                  try {
                      (E.mT(t.id), await d.Z.joinGuild(t.id, { source: I.vtS.NOTICE_BAR }));
                  } catch (e) {
                      l(!1);
                  }
              };
              return (0, i.jsxs)('div', {
                  className: o()(C.notice, g.notice),
                  children: [
                      (0, i.jsxs)(a.zx, {
                          look: a.zx.Looks.OUTLINED,
                          color: a.zx.Colors.WHITE,
                          size: a.zx.Sizes.NONE,
                          className: o()(C.button, C.back),
                          innerClassName: C.iconButton,
                          onClick: () => {
                              (0, u.s1)().goBack();
                          },
                          children: [
                              (0, i.jsx)(c.whL, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: C.arrow
                              }),
                              p.intl.string(p.t['13/7kZ'])
                          ]
                      }),
                      (0, i.jsx)(c.Text, {
                          className: C.header,
                          variant: 'text-sm/normal',
                          children: p.intl.string(p.t['N/y2WF'])
                      }),
                      (0, i.jsx)(a.zx, {
                          className: C.button,
                          look: a.zx.Looks.OUTLINED,
                          color: a.zx.Colors.WHITE,
                          size: a.zx.Sizes.NONE,
                          submitting: n,
                          onClick: T,
                          children: p.intl.format(p.t.uHN7n5, { guild: t.name })
                      })
                  ]
              });
          }
        : null;
