(n.d(t, { Z: () => T }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(749210),
    d = n(703656),
    u = n(430824),
    _ = n(914010),
    E = n(900849),
    h = n(981631),
    I = n(388032),
    p = n(8940),
    C = n(240211);
let T =
    12633 == n.j
        ? () => {
              let e = (0, s.e7)([_.Z], () => _.Z.getGuildId(), []),
                  t = (0, s.e7)([u.Z], () => u.Z.getGuild(e), [e]),
                  [n, l] = r.useState(!1);
              if (null == t) return null;
              let T = async () => {
                  l(!0);
                  try {
                      (E.mT(t.id), await c.Z.joinGuild(t.id, { source: h.vtS.NOTICE_BAR }));
                  } catch (e) {
                      l(!1);
                  }
              };
              return (0, i.jsxs)('div', {
                  className: o()(p.notice, C.notice),
                  children: [
                      (0, i.jsxs)(a.zxk, {
                          look: a.zxk.Looks.OUTLINED,
                          color: a.zxk.Colors.WHITE,
                          size: a.zxk.Sizes.NONE,
                          className: o()(p.button, p.back),
                          innerClassName: p.iconButton,
                          onClick: () => {
                              (0, d.s1)().goBack();
                          },
                          children: [
                              (0, i.jsx)(a.whL, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: p.arrow
                              }),
                              I.intl.string(I.t['13/7kZ'])
                          ]
                      }),
                      (0, i.jsx)(a.Text, {
                          className: p.header,
                          variant: 'text-sm/normal',
                          children: I.intl.string(I.t['N/y2WF'])
                      }),
                      (0, i.jsx)(a.zxk, {
                          className: p.button,
                          look: a.zxk.Looks.OUTLINED,
                          color: a.zxk.Colors.WHITE,
                          size: a.zxk.Sizes.NONE,
                          submitting: n,
                          onClick: T,
                          children: I.intl.format(I.t.uHN7n5, { guild: t.name })
                      })
                  ]
              });
          }
        : null;
