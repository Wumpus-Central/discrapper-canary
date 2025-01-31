n.d(t, { Z: () => R }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(749210),
    u = n(703656),
    E = n(430824),
    d = n(914010),
    _ = n(900849),
    I = n(41776),
    T = n(981631),
    N = n(388032),
    A = n(216594),
    S = n(532623);
let R =
    12633 == n.j
        ? () => {
              let e = (0, s.e7)([d.Z], () => d.Z.getGuildId(), []),
                  t = (0, s.e7)([E.Z], () => E.Z.getGuild(e), [e]),
                  n = (0, s.e7)([I.Z], () => I.Z.getHistorySnapshot(), []),
                  [r, R] = l.useState(!1);
              if (null == t) return null;
              let C = async () => {
                  R(!0);
                  try {
                      _.mT(t.id), await c.Z.joinGuild(t.id, { source: T.vtS.NOTICE_BAR });
                  } catch {
                      R(!1);
                  }
              };
              return (0, i.jsxs)('div', {
                  className: a()(A.notice, S.notice),
                  children: [
                      (0, i.jsxs)(o.zxk, {
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.WHITE,
                          size: o.zxk.Sizes.NONE,
                          className: a()(A.button, A.back),
                          innerClassName: A.iconButton,
                          onClick: () => {
                              let e = (0, u.s1)();
                              null != n && null != n.location ? (0, u.dL)({ ...n.location }) : e.goBack();
                          },
                          children: [
                              (0, i.jsx)(o.whL, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: A.arrow
                              }),
                              N.intl.string(N.t['13/7kZ'])
                          ]
                      }),
                      (0, i.jsx)(o.Text, {
                          className: A.header,
                          variant: 'text-sm/normal',
                          children: N.intl.string(N.t['N/y2WF'])
                      }),
                      (0, i.jsx)(o.zxk, {
                          className: A.button,
                          look: o.zxk.Looks.OUTLINED,
                          color: o.zxk.Colors.WHITE,
                          size: o.zxk.Sizes.NONE,
                          submitting: r,
                          onClick: C,
                          children: N.intl.format(N.t.uHN7n5, { guild: t.name })
                      })
                  ]
              });
          }
        : null;
